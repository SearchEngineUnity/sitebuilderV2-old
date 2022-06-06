import React from 'react';
import SectionTextBlock from '../portableText/serializer/SectionBlockSerializer';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';

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
      <StructuredSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <SectionTextBlock blocks={sectionText} />
      <StructuredSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}
export default SectionBlock;
