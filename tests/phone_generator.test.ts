import {expect} from 'chai'
import {phoneNumber} from '../src/index'
import PhoneNumber from '../src/utils/phoneNumber'

describe('Testing suite for phone number generator', () => {
    const phone : PhoneNumber = phoneNumber
    it('should return phone number', () => {
        expect(phone).to.be.an('object').with.keys(['phone'])
    })
    it('phone number should be string', () => {
        expect(phone.phone).to.be.an('string')
    })
})