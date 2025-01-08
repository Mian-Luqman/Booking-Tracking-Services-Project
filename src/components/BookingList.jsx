import React, { useState } from 'react';
import './BookingList.css';

export default function BookingList() {
  const [bookingFilter, setBookingFilter] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedERD, setSelectedERD] = useState('');
  const [selectedRailCutoff, setSelectedRailCutoff] = useState('');
  const [showFilters, setShowFilters] = useState(false);


  // Sample data
  const bookings = [
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    },
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    },
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    },
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    },
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    },
    {
      number: '4322234',
      steamshipLine: 'Ever Green',
      erd: '2024-03-18',
      railCutoff: '2024-03-15 at 00:00:00',
      lastUpdate: '2024-03-15 at 03:50:05 PM',
      changed: true,
      previousDate: '2024-03-15 at 03:50:05 PM'
    }
  ];

  const steamshipLines = ['Ever Green', 'MSC', 'Cosco'];

  // SVG Icons
  const icons = {
    chevronDown: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
    filter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
      </svg>
    ),
    file: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    chevronLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    ),
    chevronRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    )
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h2 className="booking-title">Booking list</h2>
        <div className="header-actions">
          <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
            {icons.filter}
            Filters
          </button>
          <button className="export-btn">
            {icons.file}
            <span className="export-text-mobile">Export</span>
            <span className="export-text-full">Export CSV File</span>
          </button>
        </div>
      </div>

      <div className={`filter-section ${!showFilters ? 'hidden' : ''}`}>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Booking number"
            className="filter-input"
            value={bookingFilter}
            onChange={(e) => setBookingFilter(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <select 
            className="filter-select"
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
          >
            <option value="">Steamship line</option>
            {steamshipLines.map(line => (
              <option key={line} value={line}>{line}</option>
            ))}
          </select>
          <span className="select-icon">{icons.chevronDown}</span>
        </div>

        <div className="filter-group">
          <input
            type="date"
            className="filter-input"
            value={selectedERD}
            onChange={(e) => setSelectedERD(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            value={selectedRailCutoff}
            onChange={(e) => setSelectedRailCutoff(e.target.value)}
          >
            <option value="">Rail cutoff</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
          <span className="select-icon">{icons.chevronDown}</span>
        </div>

        <button className="clear-filter">
          Clear filter
        </button>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table className="booking-table">
            <thead>
              <tr>
                <th>
                  <div className="column-header">
                    NUMBER
                    {icons.chevronDown}
                  </div>
                </th>
                <th>
                  <div className="column-header">
                    STEAMSHIP LINE
                    {icons.chevronDown}
                  </div>
                </th>
                <th>
                  <div className="column-header">
                    EARLIEST RECEIVING DATE
                    {icons.chevronDown}
                  </div>
                </th>
                <th>
                  <div className="column-header">
                    RAIL CUTOFF
                    {icons.chevronDown}
                  </div>
                </th>
                <th>
                  <div className="column-header">
                    LAST UPDATE
                    {icons.chevronDown}
                  </div>
                </th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.number}</td>
                  <td>{booking.steamshipLine}</td>
                  <td>{booking.erd}</td>
                  <td>
                    <div>
                      {booking.railCutoff}
                      {booking.changed && (
                        <div className="previous-date">
                          Previously: {booking.previousDate}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>{booking.lastUpdate}</td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination-container">
        <div className="pagination-info">
          Showing 1 to 8 of 200 contacts
        </div>
        <div className="pagination-controls">
          <button className="page-button">
            {icons.chevronLeft}
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`page-button ${page === 1 ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}
          <button className="page-button">
            {icons.chevronRight}
          </button>
        </div>
      </div>
    </div>
  );
}