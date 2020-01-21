//Generated file, please do not change

import { Asset, CategoryKeyReference, ImportResource, LocalizedString } from './common'

/**
	<p>Import representation for a category.</p>
*/
export interface CategoryImport extends ImportResource {
  /**
  	<p>Maps to <code>Category.name</code>.</p>
  */
  readonly name: LocalizedString;
  /**
  	<p>Maps to <code>Category.slug</code>.
  	Must match the pattern <code>[-a-zA-Z0-9_]{2,256}</code>.</p>
  */
  readonly slug: LocalizedString;
  /**
  	<p>Maps to <code>Category.description</code>.</p>
  */
  readonly description?: LocalizedString;
  /**
  	<p>Maps to <code>Category.parent</code>.
  	The parent category referenced must already exist
  	in the commercetools project, or the import operation
  	will have an <code>Unresolved</code> state.</p>
  */
  readonly parent?: CategoryKeyReference;
  /**
  	<p>Maps to <code>Category.orderHint</code>.</p>
  */
  readonly orderHint?: string;
  /**
  	<p>Maps to <code>Category.externalId</code>.</p>
  */
  readonly externalId?: string;
  /**
  	<p>Maps to <code>Category.metaTitle</code>.</p>
  */
  readonly metaTitle?: LocalizedString;
  /**
  	<p>Maps to <code>Category.metaDescription</code>.</p>
  */
  readonly metaDescription?: LocalizedString;
  /**
  	<p>Maps to <code>Category.metaKeywords</code>.</p>
  */
  readonly metaKeywords?: LocalizedString;
  
  readonly assets?: Asset[]
}