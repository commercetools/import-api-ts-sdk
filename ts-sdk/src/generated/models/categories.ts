//Generated file, please do not change

import { Asset, CategoryKeyReference, ImportResource, LocalizedString } from './common'

/**
*	Import representation for a category.
*	
*/
export interface CategoryImport extends ImportResource {
  /**
  *	Maps to `Category.name`.
  *	
  */
  readonly name: LocalizedString;
  /**
  *	Maps to `Category.slug`. 
  *	Must match the pattern `[-a-zA-Z0-9_]{2,256}`.
  *	
  */
  readonly slug: LocalizedString;
  /**
  *	Maps to `Category.description`.
  *	
  */
  readonly description?: LocalizedString;
  /**
  *	Maps to `Category.parent`. 
  *	The parent category referenced must already exist 
  *	in the commercetools project, or the import operation
  *	will have an `Unresolved` state.
  *	
  */
  readonly parent?: CategoryKeyReference;
  /**
  *	Maps to `Category.orderHint`.
  *	
  */
  readonly orderHint?: string;
  /**
  *	Maps to `Category.externalId`.
  *	
  */
  readonly externalId?: string;
  /**
  *	Maps to `Category.metaTitle`.
  *	
  */
  readonly metaTitle?: LocalizedString;
  /**
  *	Maps to `Category.metaDescription`.
  *	
  */
  readonly metaDescription?: LocalizedString;
  /**
  *	Maps to `Category.metaKeywords`.
  *	
  */
  readonly metaKeywords?: LocalizedString;
  readonly assets?: Asset[]
}