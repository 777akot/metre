import { Random } from 'meteor/random';

import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import queryString from 'query-string';
import * as jsonpack from 'jsonpack/main';
import { withRouter } from "react-router";

import ReactTable from 'react-table';
import {Load, IProps as ILProps} from '../../load';

import { toQuery } from './to-query';
import { IProps as _IProps, IValue as _IValue } from './';
import { Storage as BaseStorage } from './storage';

export const Context = React.createContext<any>({});

export interface IProps extends _IProps {
  set?: (merge: any) => any;
  value?: any;
}

export class Provider extends React.Component<IProps, any, any> {
  set = (merge) => {
    if (typeof(this.props.set) === 'function') this.props.set(merge);
  };
  value() {
    return this.props.value;
  }
  render() {
    const { children } = this.props;

    return <Context.Provider value={{ value: this.value(), set: this.set }}>
      {children}
    </Context.Provider>
  }
}
