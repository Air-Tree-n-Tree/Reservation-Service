import React from 'react';
import { shallow } from 'enzyme';

import { Availability } from '../client/src/containers/Availability/Availability';

describe('Availibiltiy Container Component', () => {
  const mockFetch = jest.fn();
  let availability;
  beforeEach(() => {
    availability = shallow(
      <Availability
        roomId={0}
        dispatchFetchAvailability={mockFetch}
        loading
      />,
    );
  });
  it('should exist', () => {
    expect(availability).toExist();
  });
  it('should fetch availabilities', () => {
    expect(mockFetch).toHaveBeenCalled();
  });
});
