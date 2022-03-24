/**
 * Observers in Rami committees
 * API providing data for observers in Rami committees
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: ronitb@kkl.org.il
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RemiFile } from './remiFile';
import { Region } from './region';


/**
 * this object contains a Committee record
 */
export interface ObserversCommittee {
    /**
     * Committee Id
     */
    committeeId?: number;
    /**
     * remi file num
     */
     remiTikim?: any[];
    committeeDate?: string;
    /**
     * observer name
     */
    observer?: any[];
    region?: Region;
    remiFiles?: Array<RemiFile>;
}
