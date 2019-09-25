import {expect} from 'chai'
import {userGenerator} from '../src/index'

describe('test users generator', () => {
    const usersList : object[] = userGenerator(10)
    it('Should return an array', () => {
        expect(usersList).to.be.an('array')
    })
    it('Should contain keys', () => {
        expect(usersList[0]).to.contain.keys(['firstname','lastname','age','phoned'])
    })
})