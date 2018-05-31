/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  ColorVariable,
} from './components/color-gen/color-variables';

declare global {

  namespace StencilComponents {
    interface CardLink {
      'hasIcon': boolean;
      'headline': string;
      'url': string;
    }
  }

  interface HTMLCardLinkElement extends StencilComponents.CardLink, HTMLStencilElement {}

  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };
  interface HTMLElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  interface ElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'card-link': JSXElements.CardLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface CardLinkAttributes extends HTMLAttributes {
      'hasIcon'?: boolean;
      'headline'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodeBlock {
      'language': string;
    }
  }

  interface HTMLCodeBlockElement extends StencilComponents.CodeBlock, HTMLStencilElement {}

  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-block': JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      'language'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodePreview {
      'markup': string;
    }
  }

  interface HTMLCodePreviewElement extends StencilComponents.CodePreview, HTMLStencilElement {}

  var HTMLCodePreviewElement: {
    prototype: HTMLCodePreviewElement;
    new (): HTMLCodePreviewElement;
  };
  interface HTMLElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  interface ElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-preview': JSXElements.CodePreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface CodePreviewAttributes extends HTMLAttributes {
      'markup'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorAccordion {

    }
  }

  interface HTMLColorAccordionElement extends StencilComponents.ColorAccordion, HTMLStencilElement {}

  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };
  interface HTMLElementTagNameMap {
    'color-accordion': HTMLColorAccordionElement;
  }
  interface ElementTagNameMap {
    'color-accordion': HTMLColorAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-accordion': JSXElements.ColorAccordionAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorAccordionAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorGenerator {

    }
  }

  interface HTMLColorGeneratorElement extends StencilComponents.ColorGenerator, HTMLStencilElement {}

  var HTMLColorGeneratorElement: {
    prototype: HTMLColorGeneratorElement;
    new (): HTMLColorGeneratorElement;
  };
  interface HTMLElementTagNameMap {
    'color-generator': HTMLColorGeneratorElement;
  }
  interface ElementTagNameMap {
    'color-generator': HTMLColorGeneratorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-generator': JSXElements.ColorGeneratorAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorGeneratorAttributes extends HTMLAttributes {
      'onPreviewMessage'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorGenCssText {
      'cssText': string;
    }
  }

  interface HTMLColorGenCssTextElement extends StencilComponents.ColorGenCssText, HTMLStencilElement {}

  var HTMLColorGenCssTextElement: {
    prototype: HTMLColorGenCssTextElement;
    new (): HTMLColorGenCssTextElement;
  };
  interface HTMLElementTagNameMap {
    'color-gen-css-text': HTMLColorGenCssTextElement;
  }
  interface ElementTagNameMap {
    'color-gen-css-text': HTMLColorGenCssTextElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-gen-css-text': JSXElements.ColorGenCssTextAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorGenCssTextAttributes extends HTMLAttributes {
      'cssText'?: string;
      'onCssTextChange'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorGenPreview {
      'cssText': string;
      'demoMode': string;
    }
  }

  interface HTMLColorGenPreviewElement extends StencilComponents.ColorGenPreview, HTMLStencilElement {}

  var HTMLColorGenPreviewElement: {
    prototype: HTMLColorGenPreviewElement;
    new (): HTMLColorGenPreviewElement;
  };
  interface HTMLElementTagNameMap {
    'color-gen-preview': HTMLColorGenPreviewElement;
  }
  interface ElementTagNameMap {
    'color-gen-preview': HTMLColorGenPreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-gen-preview': JSXElements.ColorGenPreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorGenPreviewAttributes extends HTMLAttributes {
      'cssText'?: string;
      'demoMode'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorGenSelectColors {
      'colors': ColorVariable[];
    }
  }

  interface HTMLColorGenSelectColorsElement extends StencilComponents.ColorGenSelectColors, HTMLStencilElement {}

  var HTMLColorGenSelectColorsElement: {
    prototype: HTMLColorGenSelectColorsElement;
    new (): HTMLColorGenSelectColorsElement;
  };
  interface HTMLElementTagNameMap {
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
  }
  interface ElementTagNameMap {
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-gen-select-colors': JSXElements.ColorGenSelectColorsAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorGenSelectColorsAttributes extends HTMLAttributes {
      'colors'?: ColorVariable[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ColorGenVariableSelector {
      'editable': boolean;
      'isParentOpen': boolean;
      'name': string;
      'property': string;
      'value': string;
    }
  }

  interface HTMLColorGenVariableSelectorElement extends StencilComponents.ColorGenVariableSelector, HTMLStencilElement {}

  var HTMLColorGenVariableSelectorElement: {
    prototype: HTMLColorGenVariableSelectorElement;
    new (): HTMLColorGenVariableSelectorElement;
  };
  interface HTMLElementTagNameMap {
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
  }
  interface ElementTagNameMap {
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'color-gen-variable-selector': JSXElements.ColorGenVariableSelectorAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorGenVariableSelectorAttributes extends HTMLAttributes {
      'editable'?: boolean;
      'isParentOpen'?: boolean;
      'name'?: string;
      'onColorChange'?: (event: CustomEvent) => void;
      'property'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ComponentPreview {

    }
  }

  interface HTMLComponentPreviewElement extends StencilComponents.ComponentPreview, HTMLStencilElement {}

  var HTMLComponentPreviewElement: {
    prototype: HTMLComponentPreviewElement;
    new (): HTMLComponentPreviewElement;
  };
  interface HTMLElementTagNameMap {
    'component-preview': HTMLComponentPreviewElement;
  }
  interface ElementTagNameMap {
    'component-preview': HTMLComponentPreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'component-preview': JSXElements.ComponentPreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface ComponentPreviewAttributes extends HTMLAttributes {
      'onPreviewMessage'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CtrlDropdown {
      'autoClose': boolean;
      'autoCloseDelay': number;
      'items': any[];
      'onSelect': Function;
      'renderer': Function;
      'setInitial': Function;
    }
  }

  interface HTMLCtrlDropdownElement extends StencilComponents.CtrlDropdown, HTMLStencilElement {}

  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  interface ElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ctrl-dropdown': JSXElements.CtrlDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CtrlDropdownAttributes extends HTMLAttributes {
      'autoClose'?: boolean;
      'autoCloseDelay'?: number;
      'items'?: any[];
      'onSelect'?: Function;
      'renderer'?: Function;
      'setInitial'?: Function;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsContent {
      'onOverlayClick': () => void;
      'showOverlay': boolean;
    }
  }

  interface HTMLDocsContentElement extends StencilComponents.DocsContent, HTMLStencilElement {}

  var HTMLDocsContentElement: {
    prototype: HTMLDocsContentElement;
    new (): HTMLDocsContentElement;
  };
  interface HTMLElementTagNameMap {
    'docs-content': HTMLDocsContentElement;
  }
  interface ElementTagNameMap {
    'docs-content': HTMLDocsContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-content': JSXElements.DocsContentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsContentAttributes extends HTMLAttributes {
      'onOverlayClick'?: () => void;
      'showOverlay'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsDocument {
      'isLoadingTimeout': number;
      'onUpdate': (document) => void;
      'path': string;
    }
  }

  interface HTMLDocsDocumentElement extends StencilComponents.DocsDocument, HTMLStencilElement {}

  var HTMLDocsDocumentElement: {
    prototype: HTMLDocsDocumentElement;
    new (): HTMLDocsDocumentElement;
  };
  interface HTMLElementTagNameMap {
    'docs-document': HTMLDocsDocumentElement;
  }
  interface ElementTagNameMap {
    'docs-document': HTMLDocsDocumentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-document': JSXElements.DocsDocumentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsDocumentAttributes extends HTMLAttributes {
      'isLoadingTimeout'?: number;
      'onUpdate'?: (document) => void;
      'path'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsFooter {
      'frontmatter': any;
      'path': string;
    }
  }

  interface HTMLDocsFooterElement extends StencilComponents.DocsFooter, HTMLStencilElement {}

  var HTMLDocsFooterElement: {
    prototype: HTMLDocsFooterElement;
    new (): HTMLDocsFooterElement;
  };
  interface HTMLElementTagNameMap {
    'docs-footer': HTMLDocsFooterElement;
  }
  interface ElementTagNameMap {
    'docs-footer': HTMLDocsFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-footer': JSXElements.DocsFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsFooterAttributes extends HTMLAttributes {
      'frontmatter'?: any;
      'path'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsHeader {
      'isMenuOpen': boolean;
      'onToggleClick': () => void;
      'section': string;
    }
  }

  interface HTMLDocsHeaderElement extends StencilComponents.DocsHeader, HTMLStencilElement {}

  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'docs-header': HTMLDocsHeaderElement;
  }
  interface ElementTagNameMap {
    'docs-header': HTMLDocsHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-header': JSXElements.DocsHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsHeaderAttributes extends HTMLAttributes {
      'isMenuOpen'?: boolean;
      'onToggleClick'?: () => void;
      'section'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsLayout {

    }
  }

  interface HTMLDocsLayoutElement extends StencilComponents.DocsLayout, HTMLStencilElement {}

  var HTMLDocsLayoutElement: {
    prototype: HTMLDocsLayoutElement;
    new (): HTMLDocsLayoutElement;
  };
  interface HTMLElementTagNameMap {
    'docs-layout': HTMLDocsLayoutElement;
  }
  interface ElementTagNameMap {
    'docs-layout': HTMLDocsLayoutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-layout': JSXElements.DocsLayoutAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsLayoutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsMenu {
      'path': string;
      'section': string;
    }
  }

  interface HTMLDocsMenuElement extends StencilComponents.DocsMenu, HTMLStencilElement {}

  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };
  interface HTMLElementTagNameMap {
    'docs-menu': HTMLDocsMenuElement;
  }
  interface ElementTagNameMap {
    'docs-menu': HTMLDocsMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-menu': JSXElements.DocsMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsMenuAttributes extends HTMLAttributes {
      'path'?: string;
      'section'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsPreview {
      'url': string;
    }
  }

  interface HTMLDocsPreviewElement extends StencilComponents.DocsPreview, HTMLStencilElement {}

  var HTMLDocsPreviewElement: {
    prototype: HTMLDocsPreviewElement;
    new (): HTMLDocsPreviewElement;
  };
  interface HTMLElementTagNameMap {
    'docs-preview': HTMLDocsPreviewElement;
  }
  interface ElementTagNameMap {
    'docs-preview': HTMLDocsPreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-preview': JSXElements.DocsPreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsPreviewAttributes extends HTMLAttributes {
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsRoot {

    }
  }

  interface HTMLDocsRootElement extends StencilComponents.DocsRoot, HTMLStencilElement {}

  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };
  interface HTMLElementTagNameMap {
    'docs-root': HTMLDocsRootElement;
  }
  interface ElementTagNameMap {
    'docs-root': HTMLDocsRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-root': JSXElements.DocsRootAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LoadingIndicator {

    }
  }

  interface HTMLLoadingIndicatorElement extends StencilComponents.LoadingIndicator, HTMLStencilElement {}

  var HTMLLoadingIndicatorElement: {
    prototype: HTMLLoadingIndicatorElement;
    new (): HTMLLoadingIndicatorElement;
  };
  interface HTMLElementTagNameMap {
    'loading-indicator': HTMLLoadingIndicatorElement;
  }
  interface ElementTagNameMap {
    'loading-indicator': HTMLLoadingIndicatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'loading-indicator': JSXElements.LoadingIndicatorAttributes;
    }
  }
  namespace JSXElements {
    export interface LoadingIndicatorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SectionSwitch {
      'section': string;
    }
  }

  interface HTMLSectionSwitchElement extends StencilComponents.SectionSwitch, HTMLStencilElement {}

  var HTMLSectionSwitchElement: {
    prototype: HTMLSectionSwitchElement;
    new (): HTMLSectionSwitchElement;
  };
  interface HTMLElementTagNameMap {
    'section-switch': HTMLSectionSwitchElement;
  }
  interface ElementTagNameMap {
    'section-switch': HTMLSectionSwitchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'section-switch': JSXElements.SectionSwitchAttributes;
    }
  }
  namespace JSXElements {
    export interface SectionSwitchAttributes extends HTMLAttributes {
      'section'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TabGroup {
      'tabs': string;
    }
  }

  interface HTMLTabGroupElement extends StencilComponents.TabGroup, HTMLStencilElement {}

  var HTMLTabGroupElement: {
    prototype: HTMLTabGroupElement;
    new (): HTMLTabGroupElement;
  };
  interface HTMLElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  interface ElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tab-group': JSXElements.TabGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TabGroupAttributes extends HTMLAttributes {
      'tabs'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
