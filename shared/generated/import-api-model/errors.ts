//Generated file, please do not change

import { ProcessingState } from './common'
import { PriceImport } from './prices'
import { Attribute } from './productvariants'

/**
	<p>The response in case of an error.</p>
*/
export interface ErrorResponse {
  /**
  	<p>The http status code of the response.</p>
  */
  readonly statusCode: number;
  /**
  	<p>Describes the error.</p>
  */
  readonly message: string;
  /**
  	<p>This property is only used for OAuth2 errors.
  	Contains the error code.</p>
  */
  readonly error?: string;
  /**
  	<p>This property is only used for OAuth2 errors.
  	Additional information to assist the client developer in
  	understanding the error.</p>
  */
  readonly error_description?: string;
  /**
  	<p>The errors that caused this error response.</p>
  */
  readonly errors?: ErrorObject[]
}
/**
	<p>An error.</p>
*/
export type ErrorObject =
  AccessDeniedError |
  InvalidScopeError |
  DuplicateAttributeValueError |
  DuplicateAttributeValuesError |
  DuplicateFieldError |
  DuplicateVariantValuesError |
  InsufficientScopeError |
  InvalidCredentialsError |
  InvalidTokenError |
  InvalidFieldError |
  InvalidJsonInput |
  InvalidInput |
  ResourceNotFoundError |
  ResourceCreationError |
  ResourceUpdateError |
  ResourceDeletionError |
  RequiredFieldError |
  InvalidStateTransitionError |
  ConcurrentModificationError |
  ContentionError |
  GenericError
;

export interface AccessDeniedError {
  readonly code: "access_denied";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}
/**
	<p>The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.</p>
*/
export interface InvalidScopeError {
  readonly code: "invalid_scope";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}
/**
	<p>The Unique AttributeConstraint was violated.</p>
*/
export interface DuplicateAttributeValueError {
  readonly code: "DuplicateAttributeValue";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>The conflicting attribute.</p>
  */
  readonly attribute: Attribute
}
/**
	<p>The CombinationUnique AttributeConstraint was violated.</p>
*/
export interface DuplicateAttributeValuesError {
  readonly code: "DuplicateAttributeValues";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  
  readonly attributes: Attribute[]
}
/**
	<p>A value for a field conflicts with an existing duplicate value.</p>
*/
export interface DuplicateFieldError {
  readonly code: "DuplicateField";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>The offending duplicate value.</p>
  */
  readonly duplicateValue?: object;
  /**
  	<p>The name of the field.</p>
  */
  readonly field?: string
}
/**
	<p>A given combination of variant values conflicts with an existing one.
	Every product variant must have a distinct combination of SKU, prices, and custom attribute values.</p>
*/
export interface DuplicateVariantValuesError {
  readonly code: "DuplicateVariantValues";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>The offending variant values.</p>
  */
  readonly variantValues: VariantValues
}

export interface VariantValues {
  
  readonly sku?: string;
  
  readonly prices: PriceImport[];
  
  readonly attributes: Attribute[]
}

export interface InsufficientScopeError {
  readonly code: "insufficient_scope";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}

export interface InvalidCredentialsError {
  readonly code: "InvalidCredentials";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}

export interface InvalidTokenError {
  readonly code: "invalid_token";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}
/**
	<p>A field has an invalid value.</p>
*/
export interface InvalidFieldError {
  readonly code: "InvalidField";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>A fixed set of allowed values for the field, if any.</p>
  */
  readonly allowedValues?: object[];
  /**
  	<p>The name of the field.</p>
  */
  readonly field: string;
  /**
  	<p>The invalid value.</p>
  */
  readonly invalidValue: object
}
/**
	<p>Invalid JSON input has been sent to the service. Either the JSON is syntactically not correct, or the JSON does not
	conform to the expected shape (e.g. is missing a required field). The client application should validate the input
	according to the constraints described in the error message before sending the request.</p>
*/
export interface InvalidJsonInput {
  readonly code: "InvalidJsonInput";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}
/**
	<p>Invalid input has been sent to the service. The client application should validate the input according to the
	constraints described in the error message before sending the request.</p>
*/
export interface InvalidInput {
  readonly code: "InvalidInput";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}

export interface ResourceNotFoundError {
  readonly code: "ResourceNotFound";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  
  readonly resource?: object
}

export interface ResourceCreationError {
  readonly code: "ResourceCreation";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  
  readonly resource?: object
}

export interface ResourceUpdateError {
  readonly code: "ResourceUpdate";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  
  readonly resource?: object
}

export interface ResourceDeletionError {
  readonly code: "ResourceDeletion";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  
  readonly resource?: object
}
/**
	<p>A required field is missing a value.</p>
*/
export interface RequiredFieldError {
  readonly code: "RequiredField";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>The name of the field.</p>
  */
  readonly field: string
}

export interface InvalidStateTransitionError {
  readonly code: "InvalidTransition";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>This enumeration describes the processing state of an import operation.</p>
  */
  readonly currentState: ProcessingState;
  /**
  	<p>This enumeration describes the processing state of an import operation.</p>
  */
  readonly newState: ProcessingState
}
/**
	<p>The request conflicts with the current state of the involved resource(s). Typically, the request attempts to modify a resource
	that is out of date, i.e. that has been modified by another client since the last time it was retrieved.
	The client application should resolve the conflict (with or without involving the end-user) before retrying the request</p>
*/
export interface ConcurrentModificationError {
  readonly code: "ConcurrentModification";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string;
  /**
  	<p>The conflicted resource.</p>
  */
  readonly conflictedResource: object;
  /**
  	<p>The version specified in the failed request.</p>
  */
  readonly specifiedVersion: number;
  /**
  	<p>The current version of the resource.</p>
  */
  readonly currentVersion: number
}

export interface ContentionError {
  readonly code: "Contention";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}

export interface GenericError {
  readonly code: "Generic";
  /**
  	<p>The error's description.</p>
  */
  readonly message: string
}