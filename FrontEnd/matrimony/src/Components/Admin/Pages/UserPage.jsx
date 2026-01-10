// src/Component/Admin/UserPage.jsx - Redesigned
import React, { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

const UserPage = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [view, setView] = useState("list"); // "list" or "form"

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4 ">
            <div>
              <h2 className="h4 mb-1 text-dark">
                <i className="bi bi-people-fill me-2 text-primary"></i>
                User Management
              </h2>
              <p className="text-muted mb-0">
                {editingUser ? 'Update user information' : 'Manage all users in the system'}
              </p>
            </div>
            
            {view === "list" && !editingUser && (
              <button
                className="btn btn-primary flex-shrink-0"
                onClick={() => setView("form")}
              >
                <i className="bi bi-plus-circle me-2"></i>
                Add New User
              </button>
            )}
          </div>

          {/* Content */}
          {view === "form" || editingUser ? (
            <div className="row">
              <div className="col-12">
                <AddUser 
                  editingUser={editingUser} 
                  setEditingUser={(user) => {
                    setEditingUser(user);
                    if (!user) setView("list");
                  }} 
                />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <DisplayUser 
                  onEdit={(user) => {
                    setEditingUser(user);
                    setView("form");
                  }} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;