import React, { useState } from 'react';
import './Dashboard.css'

const Dashboard = () => {
  const [steamshipLine, setSteamshipLine] = useState('');
  const [bookingNumber, setBookingNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const steamshipLines = [
    'Maersk Line',
    'MSC',
    'CMA CGM',
    'COSCO',
    'Hapag-Lloyd'
  ];
  //  notifications data in the same format as steamshipLines array
  const notifications = [
    {
      id: '3332101',
      title: 'Date changed',
      description: 'Date in notification #3332101 has been changed.',
      date: '12 Sep 2024'
    },
    {
      id: '3332102',
      title: 'Date changed',
      description: 'Date in notification #3332102 has been changed.',
      date: '12 Sep 2024'
    },
    {
      id: '3332103',
      title: 'Date changed',
      description: 'Date in notification #3332103 has been changed.',
      date: '12 Sep 2024'
    }
  ];

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header with Profile */}
        <div className="header">
          <div className="profile">
            <div className="avatar">
              <span>M</span>
            </div>
            <span className="greeting">Hey, Maks 👋</span>
          </div>
          
          <div className="actions">
          <div className="notification-wrapper">
              <button className="icon-button" onClick={handleNotificationClick}>
                <div className="notification-dot"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              
              {showNotifications && (
                <div className="notifications-dropdown">
                  {/* <div className="notifications-header"> */}
                    {/* <h3>Notifications <span className="notification-count">1</span></h3> */}
                  {/* </div> */}
                  <div className="notifications-list">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="notification-item">
                        <div className="notification-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          </svg>
                        </div>
                        <div className="notification-content">
                          <div className="notification-title">{notification.title}</div>
                          <div className="notification-description">
                            Date in notification #{notification.id} has been changed.
                          </div>
                        </div>
                        <div className="notification-date">{notification.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="content">
          <h1>Dashboard</h1>
          
          <div className="input-Group">
            <div className="dropdown-container">
              <div 
                className="dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{steamshipLine || "Select steamship line"}</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {steamshipLines.map((line) => (
                    <div
                      key={line}
                      className="dropdown-item"
                      onClick={() => {
                        setSteamshipLine(line);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Enter booking number"
              className="booking-input"
              value={bookingNumber}
              onChange={(e) => setBookingNumber(e.target.value)}
            />
            
            <button className="add-booking">
              Add Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;