/* eslint-disable import/no-unresolved */
import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaPalette } from 'react-icons/fa';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsType } from 'react-icons/bs';
import { HiOutlineOfficeBuilding, HiOutlineColorSwatch } from 'react-icons/hi';
import { AiOutlineGlobal } from 'react-icons/ai';
import SectionColorPreview from './preview/SectionColorPreview';
import ButtonMuiPreview from './preview/ButtonMuiPreview';
import FormDesignPreview from './preview/FormDesignPreview';

export default () =>
  S.list()
    .title('Site Builder V2')
    .items([
      S.documentTypeListItem('textBlock').title('Text Block'), // new to test paste handling
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('navMenu').title('Navigation Menus'),
              S.divider(),
              S.documentTypeListItem('page').title('Structured Pages'),
              S.documentTypeListItem('flexListingPage').title('Flex Listing Pages'),
              S.documentTypeListItem('multiChapterGuideRootPage').title(
                'Multi Chapter Guide Root Pages',
              ),
              S.documentTypeListItem('chapterGuidePage').title('Chapter Guide Pages'),
              S.documentTypeListItem('soloGuidePage').title('Solo Guide Pages'),
              S.divider(),
              S.documentTypeListItem('redirect').title('Redirects'),
            ]),
        ),
      S.documentTypeListItem('formNetlify').title('Form Netlify'),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .icon(MdSettings)
                .child(S.document().schemaType('generalSettings').documentId('generalSettings')), // adding document id, it means it will not allow you to create another instance of this doc. It's a singleton.
              S.listItem()
                .title('Theme - Palette')
                .icon(FaPalette)
                .child(S.document().schemaType('palette').documentId('palette')),
              S.listItem()
                .title('Theme - Typography')
                .icon(BsType)
                .child(S.document().schemaType('typography').documentId('typography')),
              S.listItem()
                .title('Solo Guide Page Hero Layout')
                .icon(MdSettings)
                .child(S.document().schemaType('layoutSpg').documentId('layoutSpg')),
            ]),
        ),
      S.documentTypeListItem('colorOption').title('Color Options'),
      S.listItem()
        .title('Design Options')
        .icon(HiOutlineColorSwatch)
        .child(
          S.list()
            .title('Design Options')
            .items([
              S.listItem()
                .title('Section Color Options')
                .schemaType('sectionColorSet')
                .child(
                  S.documentTypeList('sectionColorSet')
                    .title('Section Color Sets')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('sectionColorSet')
                        .views([
                          S.view.form(),
                          S.view.component(SectionColorPreview).title('Preview'),
                        ]),
                    ),
                ),
              S.listItem()
                .title('Button Design Options - MUI')
                .schemaType('btnDesignMui')
                .child(
                  S.documentTypeList('btnDesignMui')
                    .title('Button Design Sets')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('btnDesignMui')
                        .views([
                          S.view.form(),
                          S.view.component(ButtonMuiPreview).title('Preview'),
                        ]),
                    ),
                ),
              S.listItem()
                .title('Form Design Options')
                .schemaType('formStyle')
                .child(
                  S.documentTypeList('formStyle')
                    .title('Form Design Set')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('formStyle')
                        .views([
                          S.view.form(),
                          S.view.component(FormDesignPreview).title('Preview'),
                        ]),
                    ),
                ),
            ]),
        ),
      S.listItem()
        .title('Company Info')
        .icon(HiOutlineOfficeBuilding)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
    ]);
