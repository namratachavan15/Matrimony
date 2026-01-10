// src/Component/Admin/DisplayUser.jsx - Redesigned
import React, { useState, useEffect } from "react";
import { useUserContext } from "../State/UserContext";

const DisplayUser = ({ onEdit }) => {
  const { users, deleteUser } = useUserContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const usersPerPage = 8;
  const backendURL = "http://localhost:5454/";

  useEffect(() => {
    handleSearch();
  }, [searchQuery, users]);

  const handleSearch = () => {
    if (!searchQuery) {
      setFilteredUsers(users);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredUsers(
        users.filter(
          (u) =>
            String(u.id).includes(query) ||
            (u.uname && u.uname.toLowerCase().includes(query)) ||
            (u.umobile && String(u.umobile).includes(query)) ||
            (u.email && u.email.toLowerCase().includes(query))
        )
      );
    }
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig.key) return filteredUsers;
    
    return [...filteredUsers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredUsers, sortConfig]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return 'bi-arrow-down-up';
    return sortConfig.direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white py-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 bg-primary text-white p-2">
          <h5 className="mb-0 text-dark">
            <i className="bi bi-people me-2 text-white"></i>
            User Management
          </h5>
          
          <div className="d-flex gap-2 flex-wrap">
          <div className="input-group" style={{ maxWidth: '300px', height: '38px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search by name, mobile, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ height: '100%' }}
              />
              <button 
                className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                type="button"
                style={{ height: '100%', padding: '0 12px' }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
            
            <div className="d-flex align-items-center text-white small">
              <i className="bi bi-info-circle me-1"></i>
              {sortedUsers.length} users found
            </div>
          </div>
        </div>
      </div>

      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
                  <div className="d-flex align-items-center gap-1">
                    ID
                    <i className={`bi ${getSortIcon('id')} text-muted`}></i>
                  </div>
                </th>
                <th>Profile</th>
                <th onClick={() => handleSort('uname')} style={{ cursor: 'pointer' }}>
                  <div className="d-flex align-items-center gap-1">
                    Name
                    <i className={`bi ${getSortIcon('uname')} text-muted`}></i>
                  </div>
                </th>
                <th>Contact</th>
                <th>Location</th>
                <th onClick={() => handleSort('jdate')} style={{ cursor: 'pointer' }}>
                  <div className="d-flex align-items-center gap-1">
                    Joined
                    <i className={`bi ${getSortIcon('jdate')} text-muted`}></i>
                  </div>
                </th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <div className="text-muted">
                      <i className="bi bi-people display-4 d-block mb-2"></i>
                      No users found
                    </div>
                  </td>
                </tr>
              ) : (
                currentUsers.map((user) => (
                  <tr key={user.id} className="hover-shadow">
                    <td>
                      <span className="badge bg-primary">#{user.id}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={
                            user.uprofile
                              ? user.uprofile.startsWith("http")
                                ? user.uprofile
                                : `${backendURL}uploads/profile/${user.uprofile}`
                              : '/default-avatar.png'
                          }
                          alt="Profile"
                          className="rounded-circle me-2"
                          style={{
                            width: '40px',
                            height: '40px',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.src = '/default-avatar.png';
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="fw-semibold">{user.uname || 'N/A'}</div>
                        <small className="text-muted">{user.email || 'No email'}</small>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="text-nowrap">
                          <i className="bi bi-phone me-1 text-success"></i>
                          {user.umobile || 'N/A'}
                        </div>
                        {user.whatsappno && (
                          <small className="text-muted">
                            <i className="bi bi-whatsapp me-1 text-success"></i>
                            {user.whatsappno}
                          </small>
                        )}
                      </div>
                    </td>
                    <td>
                      <small className="text-muted">
                        {user.address ? 
                          `${user.address.substring(0, 30)}${user.address.length > 30 ? '...' : ''}` 
                          : 'N/A'
                        }
                      </small>
                    </td>
                    <td>
                      <small className="text-muted">
                        {user.jdate ? new Date(user.jdate).toLocaleDateString() : 'N/A'}
                      </small>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-1">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => onEdit(user)}
                          title="Edit User"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this user?')) {
                              deleteUser(user.id);
                            }
                          }}
                          title="Delete User"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        {/* <button
                          className="btn btn-sm btn-outline-info"
                          title="View Details"
                        >
                          <i className="bi bi-eye"></i>
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="card-footer bg-white">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="text-muted small">
              Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, sortedUsers.length)} of {sortedUsers.length} entries
            </div>
            
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                  >
                    <i className="bi bi-chevron-double-left"></i>
                  </button>
                </li>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}
                
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="bi bi-chevron-double-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayUser;