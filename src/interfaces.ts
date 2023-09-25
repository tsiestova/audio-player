export interface AudioListResponse {
    website: Website;
    websiteSettings: WebsiteSettings;
    collection: Collection;
    authenticatedAccount: AuthenticatedAccount;
    shoppingCart: ShoppingCart;
    shareButtons: ShareButtons;
    showCart: boolean;
    localizedStrings: LocalizedStrings;
    userAccountsContext: UserAccountsContext;
    template: Template;
    uiextensions: Uiextensions;
    empty: boolean;
    emptyFolder: boolean;
    calendarView: boolean;
    items: Item[];
}

export interface Item {
    id: string;
    collectionId: string;
    recordType: number;
    addedOn: number;
    updatedOn: number;
    displayIndex: number;
    starred: boolean;
    passthrough: boolean;
    tags: any[];
    categories: any[];
    workflowState: number;
    publishOn: number;
    authorId: string;
    mediaFocalPoint: MediaFocalPoint;
    urlId: string;
    title: string;
    sourceUrl: string;
    body: string;
    excerpt: string;
    location: Location;
    customContent?: any;
    likeCount: number;
    commentCount: number;
    publicCommentCount: number;
    commentState: number;
    unsaved: boolean;
    author: AuthenticatedAccount;
    fullUrl: string;
    assetUrl: string;
    contentType: string;
    items: any[];
    pushedServices: SiteStatus;
    pendingPushedServices: SiteStatus;
    recordTypeLabel: string;
}

export interface Location {
    mapZoom: number;
    mapLat: number;
    mapLng: number;
    markerLat: number;
    markerLng: number;
    addressTitle: string;
    addressLine1: string;
    addressLine2: string;
    addressCountry: string;
}

export interface MediaFocalPoint {
    x: number;
    y: number;
    source: number;
}

export interface Uiextensions {
    'product-badge': string;
    'product-body': string;
    'product-badge-mobile': string;
    'product-body-mobile': string;
    'product-collection-item': string;
    'scripts-enabled': boolean;
}

export interface Template {
    mobileStylesEnabled: boolean;
}

export interface UserAccountsContext {
    showSignInLink: boolean;
}

export interface LocalizedStrings {
    account: string;
    addVideo: string;
    all: string;
    allProducts: string;
    back: string;
    backToAllEvents: string;
    category: string;
    close: string;
    closeMenu: string;
    completeAndContinue: string;
    courseCtaStart: string;
    courseCtaContinue: string;
    courseCtaRetake: string;
    courseUnpublishedLessons: string;
    courseProgress: string;
    courseNavigation: string;
    openCourseNavigation: string;
    closeCourseNavigation: string;
    earlierEvent: string;
    filteringByBoth: string;
    filteringByOne: string;
    folder: string;
    gallery: string;
    galleryThumbnails: string;
    giftCardVariantSelectText: string;
    giftCardValueDisplayText: string;
    googleCalendar: string;
    iCal: string;
    languageFlagIcon: string;
    laterEvent: string;
    lesson: string;
    lessons: string;
    listOfCategories: string;
    login: string;
    map: string;
    newerPosts: string;
    next: string;
    nextLesson: string;
    nextPage: string;
    noUpcomingEvents: string;
    olderPosts: string;
    openMenu: string;
    postedIn: string;
    prev: string;
    previous: string;
    previousPage: string;
    productAddToCartText: string;
    productAnswerMapAgree: string;
    productAnswerMapDisagree: string;
    productAnswerMapNeutral: string;
    productAnswerMapStronglyDisagree: string;
    productAnswerStronglyAgree: string;
    productPrice__multiplePrices__1Monthly__indefinite: string;
    productPrice__multiplePrices__1Monthly__limited__1Years: string;
    productPrice__multiplePrices__1Monthly__limited__nMonths: string;
    productPrice__multiplePrices__1Monthly__limited__nYears: string;
    productPrice__multiplePrices__1Weekly__indefinite: string;
    productPrice__multiplePrices__1Weekly__limited__1Months: string;
    productPrice__multiplePrices__1Weekly__limited__1Years: string;
    productPrice__multiplePrices__1Weekly__limited__nMonths: string;
    productPrice__multiplePrices__1Weekly__limited__nWeeks: string;
    productPrice__multiplePrices__1Weekly__limited__nYears: string;
    productPrice__multiplePrices__nMonthly__indefinite: string;
    productPrice__multiplePrices__nMonthly__limited__1Years: string;
    productPrice__multiplePrices__nMonthly__limited__nMonths: string;
    productPrice__multiplePrices__nMonthly__limited__nYears: string;
    productPrice__multiplePrices__nWeekly__indefinite: string;
    productPrice__multiplePrices__nWeekly__limited__1Months: string;
    productPrice__multiplePrices__nWeekly__limited__1Years: string;
    productPrice__multiplePrices__nWeekly__limited__nMonths: string;
    productPrice__multiplePrices__nWeekly__limited__nWeeks: string;
    productPrice__multiplePrices__nWeekly__limited__nYears: string;
    productPrice__singlePrice__1Monthly__indefinite: string;
    productPrice__singlePrice__1Monthly__limited__1Years: string;
    productPrice__singlePrice__1Monthly__limited__nMonths: string;
    productPrice__singlePrice__1Monthly__limited__nYears: string;
    productPrice__singlePrice__1Weekly__indefinite: string;
    productPrice__singlePrice__1Weekly__limited__1Months: string;
    productPrice__singlePrice__1Weekly__limited__1Years: string;
    productPrice__singlePrice__1Weekly__limited__nMonths: string;
    productPrice__singlePrice__1Weekly__limited__nWeeks: string;
    productPrice__singlePrice__1Weekly__limited__nYears: string;
    productPrice__singlePrice__nMonthly__indefinite: string;
    productPrice__singlePrice__nMonthly__limited__1Years: string;
    productPrice__singlePrice__nMonthly__limited__nMonths: string;
    productPrice__singlePrice__nMonthly__limited__nYears: string;
    productPrice__singlePrice__nWeekly__indefinite: string;
    productPrice__singlePrice__nWeekly__limited__1Months: string;
    productPrice__singlePrice__nWeekly__limited__1Years: string;
    productPrice__singlePrice__nWeekly__limited__nMonths: string;
    productPrice__singlePrice__nWeekly__limited__nWeeks: string;
    productPrice__singlePrice__nWeekly__limited__nYears: string;
    productPriceFromMonthlyText: ProductPriceFromMonthlyText;
    productPriceFromText: string;
    productPriceFromWeeklyText: ProductPriceFromMonthlyText;
    productPricePerMonth: ProductPriceFromMonthlyText;
    productPricePerWeek: ProductPriceFromMonthlyText;
    productPriceUnavailable: string;
    productQuantityInputLabel: string;
    productQuickViewText: string;
    productSaleText: string;
    progress: string;
    salePriceText: string;
    originalPriceText: string;
    productSoldOutText: string;
    productSubscribeText: string;
    productSummaryFormNoAnswerText: string;
    productVariantSelectText: string;
    readMore: string;
    relatedProductsDefaultTitle: string;
    relatedVideosDefaultTitle: string;
    retakeCourseTitle: string;
    retakeCourseBody: string;
    retakeCourseCtaConfirm: string;
    retakeCourseCtaCancel: string;
    videoPaywallJoinButton: string;
    videoPaywallPrompt: string;
    skipToContent: string;
    skipToVideos: string;
    slideshowCurrentSlide: string;
    slideshowNextSlide: string;
    slideshowPreviousSlide: string;
    slideshowSlide: string;
    source: string;
    tagged: string;
    to: string;
    untitledEvent: string;
    videos: string;
    view: string;
    viewEvent: string;
    viewFullItem: string;
    viewFullsize: string;
    writtenBy: string;
    image: string;
    carousel: string;
    backgroundPause: string;
    backgroundPlay: string;
    videoMissingLabel: string;
    viewOptions: string;
}

export interface ProductPriceFromMonthlyText {
    one: string;
    other: string;
}

export interface ShareButtons {
    twitter: boolean;
    facebook: boolean;
    reddit: boolean;
    tumblr: boolean;
    google: boolean;
    pinterest: boolean;
    linkedin: boolean;
}

export interface ShoppingCart {
    websiteId: string;
    created: number;
    entries: any[];
    shippingLocation: SiteStatus;
    taxLineItems: any[];
    coupons: any[];
    promoCodes: any[];
    appliedGiftCards: any[];
    cartType: number;
    validCoupons: any[];
    invalidCoupons: any[];
    subtotalCents: number;
    taxCents: number;
    shippingCostCents: number;
    discountCents: number;
    giftCardRedemptionTotalCents: number;
    grandTotalCents: number;
    amountDueCents: number;
    totalQuantity: number;
    purelyDigital: boolean;
    hasDigital: boolean;
    requiresShipping: boolean;
    shippingOptions: any[];
}

export interface AuthenticatedAccount {
    id: string;
    displayName: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    bio: string;
    avatarAssetUrl: string;
}

export interface Collection {
    id: string;
    websiteId: string;
    backgroundSource: number;
    enabled: boolean;
    starred: boolean;
    type: number;
    ordering: number;
    title: string;
    navigationTitle: string;
    urlId: string;
    itemCount: number;
    updatedOn: number;
    description: string;
    pageSize: number;
    features: Features;
    eventView: number;
    folder: boolean;
    dropdown: boolean;
    tags: any[];
    categories: any[];
    homepage: boolean;
    typeName: string;
    regionName: string;
    synchronizing: boolean;
    seoData: SeoData;
    categoryPagesSeoHidden: boolean;
    tagPagesSeoHidden: boolean;
    draft: boolean;
    fullUrl: string;
    typeLabel: string;
    passwordProtected: boolean;
    pagePermissionType: number;
}

export interface SeoData {
    seoTitle: string;
    seoHidden: boolean;
}

export interface Features {
    relatedItems: RelatedItems;
    productQuickView: RelatedItems;
}

export interface RelatedItems {
    isEnabled: boolean;
}

export interface WebsiteSettings {
    id: string;
    websiteId: string;
    subjects: any[];
    country: string;
    state: string;
    simpleLikingEnabled: boolean;
    mobileInfoBarSettings: MobileInfoBarSettings;
    commentLikesAllowed: boolean;
    commentAnonAllowed: boolean;
    commentThreaded: boolean;
    commentApprovalRequired: boolean;
    commentAvatarsOn: boolean;
    commentSortType: number;
    commentFlagThreshold: number;
    commentFlagsAllowed: boolean;
    commentEnableByDefault: boolean;
    commentDisableAfterDaysDefault: number;
    disqusShortname: string;
    collectionTitleFormat: string;
    itemTitleFormat: string;
    commentsEnabled: boolean;
    uiComponentRegistrationsFlag: boolean;
    scriptRegistrationsFlag: boolean;
    bundleEligible: boolean;
    bucketingSeedId: string;
    storeSettings: StoreSettings;
    useEscapeKeyToLogin: boolean;
    ssBadgeType: number;
    ssBadgePosition: number;
    ssBadgeVisibility: number;
    ssBadgeDevices: number;
    pinterestOverlayOptions: PinterestOverlayOptions;
    ampEnabled: boolean;
    seoHidden: boolean;
    userAccountsSettings: UserAccountsSettings;
}

export interface UserAccountsSettings {
    loginAllowed: boolean;
    signupAllowed: boolean;
}

export interface PinterestOverlayOptions {
    mode: string;
}

export interface StoreSettings {
    returnPolicy?: any;
    termsOfService?: any;
    privacyPolicy?: any;
    expressCheckout: boolean;
    continueShoppingLinkUrl: string;
    useLightCart: boolean;
    showNoteField: boolean;
    shippingCountryDefaultValue: string;
    billToShippingDefaultValue: boolean;
    showShippingPhoneNumber: boolean;
    isShippingPhoneRequired: boolean;
    showBillingPhoneNumber: boolean;
    isBillingPhoneRequired: boolean;
    currenciesSupported: string[];
    defaultCurrency: string;
    selectedCurrency: string;
    measurementStandard: number;
    showCustomCheckoutForm: boolean;
    checkoutPageMarketingOptInEnabled: boolean;
    enableMailingListOptInByDefault: boolean;
    sameAsRetailLocation: boolean;
    merchandisingSettings: MerchandisingSettings;
    isLive: boolean;
    multipleQuantityAllowedForServices: boolean;
}

export interface MerchandisingSettings {
    scarcityEnabledOnProductItems: boolean;
    scarcityEnabledOnProductBlocks: boolean;
    scarcityMessageType: string;
    scarcityThreshold: number;
    multipleQuantityAllowedForServices: boolean;
    restockNotificationsEnabled: boolean;
    restockNotificationsMailingListSignUpEnabled: boolean;
    relatedProductsEnabled: boolean;
    relatedProductsOrdering: string;
    soldOutVariantsDropdownDisabled: boolean;
    productComposerOptedIn: boolean;
    productComposerABTestOptedOut: boolean;
    productReviewsEnabled: boolean;
}

export interface MobileInfoBarSettings {
    isContactEmailEnabled: boolean;
    isContactPhoneNumberEnabled: boolean;
    isLocationEnabled: boolean;
    isBusinessHoursEnabled: boolean;
}

export interface Website {
    id: string;
    identifier: string;
    websiteType: number;
    contentModifiedOn: number;
    cloneable: boolean;
    hasBeenCloneable: boolean;
    siteStatus: SiteStatus;
    language: string;
    timeZone: string;
    machineTimeZoneOffset: number;
    timeZoneOffset: number;
    timeZoneAbbr: string;
    siteTitle: string;
    siteDescription: string;
    shareButtonOptions: ShareButtonOptions;
    authenticUrl: string;
    internalUrl: string;
    baseUrl: string;
    sslSetting: number;
    isHstsEnabled: boolean;
    socialAccounts: SocialAccount[];
    typekitId: string;
    statsMigrated: boolean;
    imageMetadataProcessingEnabled: boolean;
    captchaSettings: CaptchaSettings;
    showOwnerLogin: boolean;
}

export interface CaptchaSettings {
    enabledForDonations: boolean;
}

export interface SocialAccount {
    serviceId: number;
    addedOn: number;
    profileUrl: string;
    iconEnabled: boolean;
    serviceName: string;
}

export interface ShareButtonOptions {
    '1': boolean;
    '2': boolean;
    '3': boolean;
    '4': boolean;
    '6': boolean;
    '7': boolean;
    '8': boolean;
}

export interface SiteStatus {
}