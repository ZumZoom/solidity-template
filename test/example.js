const { expectEvent } = require('@openzeppelin/test-helpers');

const Example = artifacts.require('Example');

describe('Example', async function () {
    beforeEach(async function () {
        this.contract = await Example.new();
    });

    it('should be ok', async function () {
        const receipt = await this.contract.func(1);
        expectEvent(receipt, 'Log', '1');
    });
});
