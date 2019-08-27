import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy } ) => (
  <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}
        >All</Menu.Item>
        <Menu.Item
          active={filterBy === 'price_high'}
          onClick={setFilter.bind(this, 'price_high')}
        >Price (high)</Menu.Item>
        <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this, 'price_low')}
        >Price (low)</Menu.Item>
        <Menu.Item
          active={filterBy === 'author'}
          onClick={setFilter.bind(this, 'author')}
        >Author</Menu.Item>
          <Menu.Item>
            <Input icon="search" placeholder="Please enter your query"></Input>
          </Menu.Item>
      </Menu>
)

export default Filter;