//Generated file, please do not change

import { ImportResource, LocalizedString, ProductTypeKeyReference, ReferenceType } from './common'


export interface AttributeDefinition {
  /**
  	
  */
  readonly type: AttributeType;
  
  readonly name: string;
  
  readonly label: LocalizedString;
  
  readonly isRequired: boolean;
  
  readonly attributeConstraint?: AttributeConstraintEnum;
  
  readonly inputTip?: LocalizedString;
  
  readonly inputHint?: TextInputHint;
  
  readonly isSearchable?: boolean
}

export type AttributeType =
  AttributeBooleanType |
  AttributeDateTimeType |
  AttributeDateType |
  AttributeEnumType |
  AttributeLocalizableTextType |
  AttributeLocalizedEnumType |
  AttributeMoneyType |
  AttributeNestedType |
  AttributeNumberType |
  AttributeReferenceType |
  AttributeSetType |
  AttributeTextType |
  AttributeTimeType
;

export interface AttributeBooleanType {
  readonly name: "boolean";
}

export interface AttributeDateTimeType {
  readonly name: "datetime";
}

export interface AttributeDateType {
  readonly name: "date";
}

export interface AttributeEnumType {
  readonly name: "enum";
  
  readonly values: AttributePlainEnumValue[]
}

export interface AttributePlainEnumValue {
  
  readonly key: string;
  
  readonly label: string
}

export interface AttributeLocalizableTextType {
  readonly name: "ltext";
}

export interface AttributeLocalizedEnumType {
  readonly name: "lenum";
  
  readonly values: AttributeLocalizedEnumValue[]
}

export interface AttributeLocalizedEnumValue {
  
  readonly key: string;
  
  readonly label: LocalizedString
}

export interface AttributeMoneyType {
  readonly name: "money";
}

export interface AttributeNestedType {
  readonly name: "nested";
  /**
  	<p>References a product type by its key.</p>
  */
  readonly typeReference: ProductTypeKeyReference
}

export interface AttributeNumberType {
  readonly name: "number";
}

export interface AttributeReferenceType {
  readonly name: "reference";
  /**
  	<p>The type of the referenced resource.</p>
  */
  readonly referenceTypeId: ReferenceType
}

export interface AttributeSetType {
  readonly name: "set";
  
  readonly elementType: AttributeType
}

export interface AttributeTextType {
  readonly name: "text";
}

export interface AttributeTimeType {
  readonly name: "time";
}

export type AttributeConstraintEnum =
   'None' |
   'Unique' |
   'CombinationUnique' |
   'SameForAll';

export type TextInputHint =
   'SingleLine' |
   'MultiLine';
/**
	<p>Import representation for a product type.</p>
*/
export interface ProductTypeImport extends ImportResource {
  /**
  	<p>Maps to <code>ProductType.name</code>.</p>
  */
  readonly name: string;
  /**
  	<p>Maps to <code>ProductType.description</code>.</p>
  */
  readonly description: string;
  /**
  	<p>The product type's attributes.</p>
  */
  readonly attributes?: AttributeDefinition[]
}