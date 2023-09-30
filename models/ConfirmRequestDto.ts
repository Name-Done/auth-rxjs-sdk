// tslint:disable
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface ConfirmRequestDto
 */
export interface ConfirmRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    email: string;
    /**
     * The confirmation code sent to the user\'s email
     * @type {string}
     * @memberof ConfirmRequestDto
     */
    code: string;
}
