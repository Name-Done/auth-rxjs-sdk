// tslint:disable
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface LoginRequestDto
 */
export interface LoginRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof LoginRequestDto
     */
    email: string;
    /**
     * The password of the user (minimum 8 characters)
     * @type {string}
     * @memberof LoginRequestDto
     */
    password: string;
    /**
     * The new password to set for the user (optional, minimum 8 characters)
     * @type {string}
     * @memberof LoginRequestDto
     */
    newPassword?: string;
}
