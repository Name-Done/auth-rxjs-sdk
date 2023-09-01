// tslint:disable
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface ConfirmForgotPasswordRequestDto
 */
export interface ConfirmForgotPasswordRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    email: string;
    /**
     * The verification code sent to the email
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    verificationCode: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof ConfirmForgotPasswordRequestDto
     */
    newPassword: string;
}
