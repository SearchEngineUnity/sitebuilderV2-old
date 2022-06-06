import React from 'react';
import SectionTextBlock from '../portableText/serializer/HeroSectionBlockSerializer';
import HeroSectionHeader from '../sections/HeroSectionHeader';
import HeroSectionFooter from '../sections/HeroSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subtitle,
  sectionText,
  footer,
  headerAlignment,
  footerAlignment,
  headingColor,
  subtitleColor,
  footerColor,
}) {
  return (
    <>
      <HeroSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <SectionTextBlock blocks={sectionText} />
      <HeroSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}
export default SectionBlock;
