export function mapSeoToProps(
  {
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug,
    noindex,
    nofollow,
    canonical,
  },
  type,
) {
  return {
    type,
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
  };
}

export function mapCtaFormToProps({ idTag, title, subtitle, form, _rawDisclaimer }) {
  return {
    id: idTag,
    title,
    subtitle,
    form,
    disclaimer: _rawDisclaimer,
  };
}

export function mapMainNavToProps({ menu }) {
  return {
    menu,
  };
}

export function mapGuideSegmentToProps({ idTag, title, subtitle, col, cards }) {
  return {
    id: idTag,
    title,
    subtitle,
    col,
    cards,
  };
}

export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
  return {
    title: h1,
    date: displayDate,
    excerpt,
    image: cardImage?.mainImage?._rawAsset,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?._rawAsset?.originalFilename,
    url: `/${slug.current}`,
  };
}

export function mapFluidImgBlockToProps({ _rawAsset, alt, _rawCaption, maxHeight, maxWidth }) {
  return {
    image: _rawAsset,
    alt,
    caption: _rawCaption || undefined,
    maxHeight,
    maxWidth,
  };
}

export function mapGuideHeroToProps({ h1, _rawHeroSubtitle, displayDate, heroImage }) {
  return {
    h1,
    subtitle: _rawHeroSubtitle,
    date: displayDate,
    image: heroImage,
  };
}

export function mapLrHeroToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  colorSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    colorSettings,
  };
}

export function mapHeroBlockToProps({ title, _rawSubtitle }) {
  return {
    h1: title,
    subtitle: _rawSubtitle,
  };
}

export function mapLearningSegmentToProps({ idTag }) {
  return {
    idTag,
  };
}

export function mapNavBrandToProps({ brandGroup, alt }) {
  return {
    alt,
    brandGroup,
  };
}

export function mapNavItemToProps({ isButton, title, nav }) {
  return {
    isButton,
    url: nav?.slug?.current,
    title,
  };
}

export function mapNavGroupToProps({ title, nav, group }) {
  return {
    title,
    url: nav?.slug?.current,
    subGroup: group,
  };
}

export function mapLrFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  colorSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    colorSettings,
  };
}

export function mapSectionBlockToProps({
  header,
  _rawText,
  _rawFooter,
  headerAlignment,
  footerAlignment,
}) {
  return {
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    sectionText: _rawText,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
  };
}

export function mapStackFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  colorSettings,
  header,
  idTag,
  blockWidth,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    blockWidth,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    colorSettings,
  };
}

export function mapPaginatedListingSectionToProps({
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout = '1/1/1',
  colorSettings,
  header,
  hashID,
}) {
  return {
    idTag: hashID,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    layout,
    headerAlignment,
    footerAlignment,
    colorSettings,
  };
}

export function mapMuiBtnToProps({ idTag, btnAlignment, link, text, design }) {
  return {
    idTag,
    text,
    variant: design?.settings?.variant,
    disableElevation: design?.settings?.disableElevation,
    disableFocusRipple: design?.settings?.disableFocusRipple,
    disableRipple: design?.settings?.disableRipple,
    fullWidth: design?.settings?.fullWidth,
    borderRadius: design?.settings?.borderRadius,
    padding: design?.settings?.padding,
    link,
    colors: design?.colors,
    alignment: btnAlignment,
    typography: design?.typography,
  };
}

export function mapMuiBtnSubmitToProps({ settings, colors, typography }) {
  return {
    variant: settings?.variant,
    disableElevation: settings?.disableElevation,
    disableFocusRipple: settings?.disableFocusRipple,
    disableRipple: settings?.disableRipple,
    fullWidth: settings?.fullWidth,
    borderRadius: settings?.borderRadius,
    padding: settings?.padding,
    colors,
    typography,
  };
}

export function mapGridFlexToProps({ layout, tiles, tileOption }) {
  return {
    layout,
    tiles,
    tileOption,
  };
}

export function mapFluidImgToProps({ _rawAsset, alt, maxHeight, maxWidth, _rawCaption }) {
  return {
    image: _rawAsset,
    alt,
    maxHeight,
    maxWidth,
    caption: _rawCaption,
  };
}

export function mapBlockFormNetlifyToProps({
  _rawFormNetlify,
  title,
  titleAlignment,
  _rawFormStyle,
}) {
  return {
    title,
    align: titleAlignment,
    form: _rawFormNetlify,
    style: _rawFormStyle,
  };
}
