import * as React from 'react';

import { Provider as PaginationProvider } from '../components/pagination';
import { Views } from '../components/pagination/views';
import { Context as StoreContext, Provider as StoreProvider } from '../components/store/props';
import Table, { defaultStore, methods, tracker } from './components/table';

export default class extends React.Component {
  state = defaultStore;

  set = (merge) => this.setState(merge);

  render() {
    return <StoreProvider
      set={this.set}
      value={this.state}
    >
      <StoreContext.Consumer>
        {({ value, set }) => (
          <PaginationProvider
            methods={methods}
            tracker={tracker}

            Views={Views}

            value={value}
            set={set}
          >
            <Table/>
          </PaginationProvider>
        )}
      </StoreContext.Consumer>
    </StoreProvider>;
  };
}