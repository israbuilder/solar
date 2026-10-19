const DEFAULT_PAGE_TYPE = 'unknown';

/**
 * Safely returns gtag if it exists.
 */
function getGtag() {
    if (
        typeof window === 'undefined'
        || typeof window.gtag !== 'function'
    ) {
        return null;
    }

    return window.gtag;
}

/**
 * Read useful attribution values from the current URL.
 */
function getUrlAttribution() {
    if (typeof window === 'undefined') {
        return {};
    }

    const params = new URLSearchParams(
        window.location.search
    );

    return {
        utm_source:
            params.get('utm_source') || undefined,

        utm_medium:
            params.get('utm_medium') || undefined,

        utm_campaign:
            params.get('utm_campaign') || undefined,

        utm_term:
            params.get('utm_term') || undefined,

        utm_content:
            params.get('utm_content') || undefined,

        gclid:
            params.get('gclid') || undefined,

        gbraid:
            params.get('gbraid') || undefined,

        wbraid:
            params.get('wbraid') || undefined,

        fbclid:
            params.get('fbclid') || undefined,

        ttclid:
            params.get('ttclid') || undefined,
    };
}

/**
 * Read global page metadata.
 *
 * You can set these in Astro using data attributes
 * on <body>.
 */
function getPageMetadata() {
    if (typeof document === 'undefined') {
        return {};
    }

    const body = document.body;

    return {
        page_path:
            window.location.pathname,

        page_location:
            window.location.href,

        page_title:
            document.title,

        page_type:
            body?.dataset?.pageType
            || DEFAULT_PAGE_TYPE,

        service:
            body?.dataset?.service
            || undefined,

        location:
            body?.dataset?.location
            || undefined,
    };
}

/**
 * Remove undefined/null/empty values before
 * sending data to GA4.
 */
function cleanParameters(parameters) {
    return Object.fromEntries(
        Object.entries(parameters)
            .filter(([, value]) => {
                return (
                    value !== undefined
                    && value !== null
                    && value !== ''
                );
            })
    );
}

/**
 * Main tracking function.
 */
export function trackEvent(
    eventName,
    parameters = {}
) {
    const gtag = getGtag();

    if (!gtag) {
        if (import.meta.env.DEV) {
            console.warn(
                `[analytics] gtag unavailable for event: ${eventName}`,
                parameters
            );
        }

        return;
    }

    const payload = cleanParameters({
        ...getPageMetadata(),
        ...getUrlAttribution(),
        ...parameters,
    });

    if (import.meta.env.DEV) {
        console.log(
            `[analytics] ${eventName}`,
            payload
        );
    }

    gtag(
        'event',
        eventName,
        payload
    );
}

/**
 * Phone click.
 */
export function trackPhoneClick({
    phoneNumber,
    placement = 'unknown',
    service,
    location,
} = {}) {
    trackEvent(
        'phone_click',
        {
            phone_number:
                phoneNumber,

            placement,

            service,

            location,
        }
    );
}

/**
 * Email click.
 */
export function trackEmailClick({
    email,
    placement = 'unknown',
} = {}) {
    trackEvent(
        'email_click',
        {
            email,
            placement,
        }
    );
}

/**
 * Schedule / booking CTA click.
 */
export function trackScheduleClick({
    placement = 'unknown',
    service,
    location,
    linkUrl,
} = {}) {
    trackEvent(
        'schedule_click',
        {
            placement,
            service,
            location,

            link_url:
                linkUrl,
        }
    );
}

/**
 * Chat click.
 */
export function trackChatClick({
    placement = 'unknown',
    provider,
} = {}) {
    trackEvent(
        'chat_click',
        {
            placement,
            chat_provider:
                provider,
        }
    );
}

/**
 * User started completing a lead form.
 */
export function trackFormStart({
    formName,
    service,
    location,
} = {}) {
    trackEvent(
        'form_start',
        {
            form_name:
                formName,

            service,

            location,
        }
    );
}

/**
 * Form successfully accepted by your backend.
 */
export function trackFormSubmit({
    formName,
    service,
    location,
    leadId,
} = {}) {
    trackEvent(
        'form_submit',
        {
            form_name:
                formName,

            service,

            location,

            lead_id:
                leadId,
        }
    );
}

/**
 * Confirmed lead.
 *
 * Use this only after the lead is actually
 * created successfully.
 */
export function trackGenerateLead({
    formName,
    leadSource = 'website',
    service,
    location,
    leadId,
    value,
    currency = 'USD',
} = {}) {
    trackEvent(
        'generate_lead',
        {
            form_name:
                formName,

            lead_source:
                leadSource,

            service,

            location,

            lead_id:
                leadId,

            value,

            currency,
        }
    );
}

/**
 * Service page view.
 *
 * page_view itself should still be handled
 * by GA4.
 */
export function trackServicePageView({
    service,
    location,
} = {}) {
    trackEvent(
        'service_page_view',
        {
            page_type:
                'service',

            service,

            location,
        }
    );
}

/**
 * Location/service-area page.
 */
export function trackLocationPageView({
    location,
    service,
} = {}) {
    trackEvent(
        'location_page_view',
        {
            page_type:
                'location',

            location,

            service,
        }
    );
}

/**
 * Blog/article view.
 */
export function trackBlogView({
    articleTitle,
    articleCategory,
    service,
} = {}) {
    trackEvent(
        'blog_view',
        {
            page_type:
                'blog',

            article_title:
                articleTitle,

            article_category:
                articleCategory,

            service,
        }
    );
}

/**
 * Generic tracked CTA.
 */
export function trackCtaClick({
    ctaName,
    placement = 'unknown',
    destination,
    service,
} = {}) {
    trackEvent(
        'cta_click',
        {
            cta_name:
                ctaName,

            placement,

            destination,

            service,
        }
    );
}

/**
 * Register global click listeners.
 *
 * This catches tel:, mailto: and any element
 * with data-ga-event.
 */
function registerClickTracking() {
    document.addEventListener(
        'click',
        (event) => {
            const target =
                event.target instanceof Element
                    ? event.target
                    : null;

            if (!target) {
                return;
            }

            const phoneLink =
                target.closest(
                    'a[href^="tel:"]'
                );

            if (phoneLink) {
                trackPhoneClick({
                    phoneNumber:
                        phoneLink
                            .getAttribute(
                                'href'
                            )
                            ?.replace(
                                'tel:',
                                ''
                            ),

                    placement:
                        phoneLink
                            .dataset
                            .placement
                        || 'unknown',

                    service:
                        phoneLink
                            .dataset
                            .service,

                    location:
                        phoneLink
                            .dataset
                            .location,
                });

                return;
            }

            const emailLink =
                target.closest(
                    'a[href^="mailto:"]'
                );

            if (emailLink) {
                trackEmailClick({
                    email:
                        emailLink
                            .getAttribute(
                                'href'
                            )
                            ?.replace(
                                'mailto:',
                                ''
                            ),

                    placement:
                        emailLink
                            .dataset
                            .placement
                        || 'unknown',
                });

                return;
            }

            const tracked =
                target.closest(
                    '[data-ga-event]'
                );

            if (!tracked) {
                return;
            }

            const eventName =
                tracked.dataset.gaEvent;

            if (!eventName) {
                return;
            }

            trackEvent(
                eventName,
                {
                    placement:
                        tracked.dataset
                            .placement
                        || 'unknown',

                    service:
                        tracked.dataset
                            .service,

                    location:
                        tracked.dataset
                            .location,

                    cta_name:
                        tracked.dataset
                            .ctaName,

                    link_url:
                        tracked instanceof HTMLAnchorElement
                            ? tracked.href
                            : undefined,
                }
            );
        }
    );
}

/**
 * Initialize analytics tracking.
 */
export function initAnalytics() {
    if (
        typeof window === 'undefined'
        || typeof document === 'undefined'
    ) {
        return;
    }

    registerClickTracking();
}

/**
 * Astro client-side navigation support.
 *
 * Even if you aren't currently using View Transitions,
 * this keeps the module ready for them.
 */
function initialize() {
    initAnalytics();
}

if (typeof document !== 'undefined') {
    if (
        document.readyState === 'loading'
    ) {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {
                once: true,
            }
        );
    } else {
        initialize();
    }

    document.addEventListener(
        'astro:page-load',
        initialize
    );
}