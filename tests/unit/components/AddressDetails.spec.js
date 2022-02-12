import { render } from '@testing-library/vue';
import AddressDetails from '@/components/AddressDetails';

const MOCK_WALLET_ADDRESS = '0x12345';
const MOCK_PROPS = {
  roles: [{
    name: 'Pauser',
    color: '#1AA3FF',
  }],
  balance: 50000,
  address: MOCK_WALLET_ADDRESS,
};

describe('Address page', () => {

  it('Renders labels correctly', () => {
    const { getByText } = render(AddressDetails, {
      props: MOCK_PROPS,
      mocks: {
        $route: {
          path: `/address/${MOCK_WALLET_ADDRESS}`,
          params: {
            address: MOCK_WALLET_ADDRESS,
          },
        },
      },
    });
    expect(getByText('Address Details')).not.toBeNull();
    expect(getByText('Wallet Address')).not.toBeNull();
    expect(getByText(MOCK_WALLET_ADDRESS)).not.toBeNull();
    expect(getByText('Balance')).not.toBeNull();
  });

  it('Renders Roles correctly', () => {
    const { getByText } = render(AddressDetails, {
      props: MOCK_PROPS,
      mocks: {
        $route: {
          path: `/address/${MOCK_WALLET_ADDRESS}`,
          params: {
            address: MOCK_WALLET_ADDRESS,
          },
        },
      },
    });
    expect(getByText('Pauser')).not.toBeNull();
  });

  it('Displays the balance correctly', () => {
    const { getByText } = render(AddressDetails, {
      props: MOCK_PROPS,
      mocks: {
        $route: {
          path: `/address/${MOCK_WALLET_ADDRESS}`,
          params: {
            address: MOCK_WALLET_ADDRESS,
          },
        },
      },
    });
    expect(getByText('$50000')).not.toBeNull();
  });
});
