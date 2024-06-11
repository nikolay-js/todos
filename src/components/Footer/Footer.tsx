import React, { FC } from 'react';

import './Footer.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

interface FooterProps {
  changeFilter: (activeFilter: string) => void
  amount: number;
  activeFilter: string;
  removeTask: () => void 
}

const Footer: FC<FooterProps> = ({ amount, activeFilter, changeFilter, removeTask }) => (
  <div className="footer">
    <span className="amount">{`${amount} items left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => { changeFilter(id) }}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
    <button
      onClick={() => { removeTask() }}
      className="clear-btn"
    >Clear completed</button>
  </div>
);

export default Footer;
