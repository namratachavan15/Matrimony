// src/Components/Admin/Pages/ProfileModal.jsx
import React, { useState, useEffect } from "react";
import "./ProfileModal.css";

export default function ProfileModal({
  user,
  backendURL = "http://localhost:5454/",
  onClose,
  casts = [],
  subcasts = [],
  gans = [],
  gotras = [],
  nadis = [],
  nakshtras = [],
  rashis = [],
}) {
  if (!user) return null;

  const [activeTab, setActiveTab] = useState("personal"); // State for active tab
  const [showImageModal, setShowImageModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const other = user.other || {};

  console.log("user", user);
  
  const photoUrl = user.uprofile
    ? user.uprofile.startsWith("http")
      ? user.uprofile
      : `${backendURL}uploads/profile/${user.uprofile}`
    : "/mnt/data/17.png";

  // Image zoom functions
  const openImageModal = () => {
    setShowImageModal(true);
    setZoomLevel(1);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(prev => prev + 0.25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(prev => prev - 0.25);
    }
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showImageModal) {
        closeImageModal();
      }
    };

    if (showImageModal) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [showImageModal]);

  const formatDate = (d) => {
    if (!d) return "N/A";
    try {
      return new Date(d).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return d;
    }
  };

  // Helper functions for caste, subcaste, and astrology fields
  const getCasteName = () => {
    const ctid = user.ctid;
    if (!ctid || !Array.isArray(casts) || casts.length === 0)
      return "Not specified";
    const castObj = casts.find((c) => String(c.id) === String(ctid));
    return castObj?.cast || castObj?.castName || castObj?.name || "Not specified";
  };

  const getSubcastName = () => {
    const sctid = user.sctid;
    if (!sctid || !Array.isArray(subcasts) || subcasts.length === 0)
      return "Not specified";
    const sub = subcasts.find((sc) => String(sc.sctid ?? sc.id) === String(sctid));
    return sub?.subcastName || sub?.subcast || sub?.name || "Not specified";
  };

  const getRashiName = () => {
    if (other.ras) return other.ras;
    const rid = other.rsid ?? other.rid ?? other.rashiId;
    if (!rid || !Array.isArray(rashis) || rashis.length === 0) return "N/A";
    const r = rashis.find((x) => String(x.id) === String(rid));
    return r?.ras || r?.name || r?.rashiName || "N/A";
  };

  const getGotraName = () => {
    if (other.gotra) return other.gotra;
    const gid = other.gid ?? other.gotraId;
    if (!gid || !Array.isArray(gotras) || gotras.length === 0) return "N/A";
    const g = gotras.find((x) => String(x.id) === String(gid));
    return g?.gotra || g?.gotraName || "N/A";
  };

  const getNakshtraName = () => {
    if (other.nakshtra) return other.nakshtra;
    const nkid = other.nkid ?? other.nakshtraId;
    if (!nkid || !Array.isArray(nakshtras) || nakshtras.length === 0) return "N/A";
    const n = nakshtras.find((x) => String(x.id) === String(nkid));
    return n?.nakshtra || n?.nakshtraName || "N/A";
  };

  const getNadiName = () => {
    if (other.nadi) return other.nadi;
    const nid = other.ndid ?? other.nid ?? other.nadiId;
    if (!nid || !Array.isArray(nadis) || nadis.length === 0) return "N/A";
    const n = nadis.find((x) => String(x.id) === String(nid));
    return n?.nadi || n?.nadiName || "N/A";
  };

  const getGanName = () => {
    if (other.gan) return other.gan;
    const ganid = other.gnid ?? other.gid ?? other.ganId;
    if (!ganid || !Array.isArray(gans) || gans.length === 0) return "N/A";
    const g = gans.find((x) => String(x.id) === String(ganid));
    return g?.gan || g?.ganName || "N/A";
  };

  const hasContactDetails =
    user.umobile || user.altMobile || user.whatsappno || user.email || 
    user.address || user.cLocation;

  // Status badge color
  const getStatusColor = (status) => {
    switch(status) {
      case 1: return '#10b981'; // Active - green
      case 0: return '#ef4444'; // Inactive - red
      default: return '#6b7280'; // Default - gray
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 1: return 'Active';
      case 0: return 'Inactive';
      default: return 'Unknown';
    }
  };

  // Tab content components
  const PersonalTab = () => (
    <div className="tab-content-inner">
      <div className="cards-grid">
        {/* Personal Details Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon">👤</div>
            <h3>Personal Details</h3>
          </div>
          <div className="card-content">
            <div className="info-grid">
              <div className="info-item">
                <label>Birth Details</label>
                <span>{formatDate(user.dob)} {user.dobTime && `at ${user.dobTime}`}</span>
              </div>
              <div className="info-item">
                <label>Birth Place</label>
                <span>{user.birthplace || "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Weight</label>
                <span>{user.weight ? `${user.weight} Kg` : "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Marriage Type</label>
                <span>{user.marriageType || "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Blood Group</label>
                <span className={`blood-group ${user.bloodgroup ? 'has-value' : ''}`}>
                  {user.bloodgroup || "N/A"}
                </span>
              </div>
              <div className="info-item">
                <label>Caste</label>
                <span>{getCasteName()}</span>
              </div>
              <div className="info-item">
                <label>Sub Caste</label>
                <span>{getSubcastName()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon">🎓</div>
            <h3>Education & Career</h3>
          </div>
          <div className="card-content">
            <div className="info-grid">
              <div className="info-item">
                <label>Profession</label>
                <span>{user.currentWork || "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Work Location</label>
                <span>{user.cLocation || "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Annual Income</label>
                <span className="income-value">{user.fincome || "N/A"}</span>
              </div>
              <div className="info-item">
                <label>Education</label>
                <span>{user.educationDetails || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Details Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon">🌿</div>
            <h3>Lifestyle</h3>
          </div>
          <div className="card-content">
            <div className="lifestyle-details">
              {user.diet && (
                <div className="lifestyle-item">
                  <label>Diet</label>
                  <span className="lifestyle-tag diet">{user.diet}</span>
                </div>
              )}
              {user.drink && (
                <div className="lifestyle-item">
                  <label>Drink</label>
                  <span className="lifestyle-tag drink">{user.drink}</span>
                </div>
              )}
              {user.smoking && (
                <div className="lifestyle-item">
                  <label>Smoking</label>
                  <span className="lifestyle-tag smoking">{user.smoking}</span>
                </div>
              )}
              {user.specs && (
                <div className="lifestyle-item">
                  <label>Spectacles</label>
                  <span className="lifestyle-tag specs">{user.specs}</span>
                </div>
              )}
              {!user.diet && !user.drink && !user.smoking && !user.specs && (
                <div className="no-lifestyle-info">
                  <span>No lifestyle information available</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Extra Information Card */}
        {(user.otherinfo || user.expectation || user.remark) && (
          <div className="info-card">
            <div className="card-header">
              <div className="card-icon">📝</div>
              <h3>Extra Information</h3>
            </div>
            <div className="card-content">
              <div className="info-grid">
                {user.otherinfo && (
                  <div className="info-item">
                    <label>Other Info</label>
                    <span>{user.otherinfo}</span>
                  </div>
                )}
                {user.expectation && (
                  <div className="info-item">
                    <label>Expectation</label>
                    <span>{user.expectation}</span>
                  </div>
                )}
                {user.remark && (
                  <div className="info-item">
                    <label>Remark</label>
                    <span>{user.remark}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const FamilyTab = () => (
    <div className="tab-content-inner">
      <div className="cards-grid">
        {user.family ? (
          <>
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">🏠</div>
                <h3>Family Details</h3>
              </div>
              <div className="card-content">
                <div className="family-grid">
                  <div className="family-member">
                    <div className="member-role">Father</div>
                    <div className="member-name">{user.family.father || "N/A"}</div>
                    <div className="member-role">Father Occupation</div>
                    <div className="member-occupation">{user.family.fatherOccupation || "N/A"}</div>
                  </div>
                  <div className="family-member">
                    <div className="member-role">Mother</div>
                    <div className="member-name">{user.family.mother || "N/A"}</div>
                    <div className="member-role">Mother Occupation</div>
                    <div className="member-occupation">{user.family.motherOccupation || "N/A"}</div>
                  </div>
                  <div className="family-stats">
                    <div className="sibling-count">
                      <span className="count">{user.family.brother || 0}</span>
                      <span>Brothers</span>
                    </div>
                    <div className="sibling-count">
                      <span className="count">{user.family.sister || 0}</span>
                      <span>Sisters</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Details Card */}
            {(user.family.propertyDetails || user.family.otherDetails) && (
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">🏡</div>
                  <h3>Property Details</h3>
                </div>
                <div className="card-content">
                  <div className="info-grid">
                    {user.family.propertyDetails && (
                      <div className="info-item">
                        <label>Property Details</label>
                        <span>{user.family.propertyDetails}</span>
                      </div>
                    )}
                    {user.family.otherDetails && (
                      <div className="info-item">
                        <label>Other Family Details</label>
                        <span>{user.family.otherDetails}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-data-card">
            <div className="card-icon">🏠</div>
            <h3>No Family Information Available</h3>
            <p>Family details have not been added to this profile.</p>
          </div>
        )}
      </div>
    </div>
  );

  const AstrologyTab = () => (
    <div className="tab-content-inner">
      <div className="cards-grid">
        {user.other ? (
          <>
            <div className="info-card astrology-card">
              <div className="card-header">
                <div className="card-icon">⭐</div>
                <h3>Astrology Details</h3>
              </div>
              <div className="card-content">
                <div className="astrology-grid">
                  <div className="astrology-item">
                    <div className="planet-icon">♈</div>
                    <div className="astrology-info">
                      <label>Rashi</label>
                      <span>{getRashiName()}</span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">🌌</div>
                    <div className="astrology-info">
                      <label>Nakshatra</label>
                      <span>{getNakshtraName()}</span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">📜</div>
                    <div className="astrology-info">
                      <label>Gotra</label>
                      <span>{getGotraName()}</span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">🌀</div>
                    <div className="astrology-info">
                      <label>Nadi</label>
                      <span>{getNadiName()}</span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">⚖️</div>
                    <div className="astrology-info">
                      <label>Gan</label>
                      <span>{getGanName()}</span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">🔥</div>
                    <div className="astrology-info">
                      <label>Mangal</label>
                      <span className={`mangal-status ${other.managal ? 'has-value' : ''}`}>
                        {other.managal || other.mangal || "N/A"}
                      </span>
                    </div>
                  </div>
                  <div className="astrology-item">
                    <div className="planet-icon">👣</div>
                    <div className="astrology-info">
                      <label>Charan</label>
                      <span>{other.charan || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Information Card */}
            {(user.dieses || user.diseaseDetails) && (
              <div className="info-card">
                <div className="card-header">
                  <div className="card-icon">⚠️</div>
                  <h3>Health Information</h3>
                </div>
                <div className="card-content">
                  <div className="info-grid">
                    {user.dieses && (
                      <div className="info-item">
                        <label>Disease</label>
                        <span>{user.dieses}</span>
                      </div>
                    )}
                    {user.diseaseDetails && (
                      <div className="info-item">
                        <label>Disease Details</label>
                        <span>{user.diseaseDetails}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-data-card">
            <div className="card-icon">⭐</div>
            <h3>No Astrology Information Available</h3>
            <p>Astrology details have not been added to this profile.</p>
          </div>
        )}
      </div>
    </div>
  );

  const ContactTab = () => (
    <div className="tab-content-inner">
      <div className="cards-grid">
        {hasContactDetails ? (
          <div className="info-card contact-card">
            <div className="card-header">
              <div className="card-icon">📞</div>
              <h3>Contact Details</h3>
            </div>
            <div className="card-content">
              <div className="contact-grid">
                {user.umobile && (
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <div className="contact-info">
                      <label>Mobile</label>
                      <span>{user.umobile}</span>
                    </div>
                  </div>
                )}
                {user.altMobile && (
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <div className="contact-info">
                      <label>Alt. Mobile</label>
                      <span>{user.altMobile}</span>
                    </div>
                  </div>
                )}
                {user.whatsappno && (
                  <div className="contact-item">
                    <span className="contact-icon">💬</span>
                    <div className="contact-info">
                      <label>WhatsApp</label>
                      <span>{user.whatsappno}</span>
                    </div>
                  </div>
                )}
                {user.email && (
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div className="contact-info">
                      <label>Email</label>
                      <span>{user.email}</span>
                    </div>
                  </div>
                )}
                {user.address && (
                  <div className="contact-item full-width">
                    <span className="contact-icon">🏠</span>
                    <div className="contact-info">
                      <label>Address</label>
                      <span>{user.address}</span>
                    </div>
                  </div>
                )}
                {user.cLocation && (
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div className="contact-info">
                      <label>Current Location</label>
                      <span>{user.cLocation}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="no-data-card">
            <div className="card-icon">📞</div>
            <h3>No Contact Information Available</h3>
            <p>Contact details have not been added to this profile.</p>
          </div>
        )}
      </div>
    </div>
  );

  // Render active tab content
  const renderTabContent = () => {
    switch(activeTab) {
      case "personal":
        return <PersonalTab />;
      case "family":
        return <FamilyTab />;
      case "astrology":
        return <AstrologyTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <PersonalTab />;
    }
  };

  return (
    <>
      <div className="profile-modal-overlay" onClick={onClose}>
        <div className="profile-modal-container" onClick={(e) => e.stopPropagation()}>
          
          {/* Header */}
          <div className="profile-modal-header">
            <div className="header-content">
              <h2>Profile Details</h2>
              <div className="status-badge" style={{backgroundColor: getStatusColor(user.status)}}>
                {getStatusText(user.status)}
              </div>
            </div>
            <button className="close-btn" onClick={onClose}>
              <span>×</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="profile-modal-content">
            
            {/* Profile Header Section */}
            <div className="profile-header">
              <div className="avatar-section">
                <div className="avatar-container" onClick={openImageModal} style={{ cursor: 'pointer' }}>
                  <img src={photoUrl} alt={user.uname} className="avatar" />
                  <div className="online-indicator"></div>
                  <div className="zoom-hint">Click to zoom</div>
                </div>
               
              </div>
              
              <div className="profile-info">
                <div className="name-section">
                  <h1>{user.uname}</h1>
                  <span className="profile-id">ID: {user.id}</span>
                </div>
                
                <div className="quick-stats">
                  <div className="stat-item">
                    <span className="stat-value">{user.age ?? "N/A"}</span>
                    <span className="stat-label" >Years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{user.height || "N/A"}</span>
                    <span className="stat-label" >Height</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{user.fincome || "-"}</span>
                    <span className="stat-label" >Income</span>
                  </div>
                </div>

                <div className="profile-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span>{formatDate(user.dob)} {user.dobTime && `| ${user.dobTime}`}</span>
                  </div>
                  {/* <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{user.cLocation || "Location not specified"}</span>
                  </div> */}
                  {/* <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{getCasteName()} {getSubcastName() !== "Not specified" && `| ${getSubcastName()}`}</span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
              <button 
                className={`tab-btn ${activeTab === "family" ? "active" : ""}`}
                onClick={() => setActiveTab("family")}
              >
                Family
              </button>
              <button 
                className={`tab-btn ${activeTab === "astrology" ? "active" : ""}`}
                onClick={() => setActiveTab("astrology")}
              >
                Astrology
              </button>
              <button 
                className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {showImageModal && (
        <div className="image-zoom-overlay" onClick={closeImageModal}>
          <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
            <div className="image-zoom-header">
              <h3>{user.uname}'s Profile Photo</h3>
              <div className="zoom-controls">
                <div className="zoom-buttons">
                  <button 
                    className="zoom-btn" 
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    title="Zoom Out"
                  >
                    <span>−</span>
                  </button>
                  <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                  <button 
                    className="zoom-btn" 
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    title="Zoom In"
                  >
                    <span>+</span>
                  </button>
                  <button 
                    className="zoom-btn reset-btn" 
                    onClick={handleZoomReset}
                    title="Reset Zoom"
                  >
                    ↺
                  </button>
                </div>
                <button className="close-zoom-btn" onClick={closeImageModal} title="Close">
                  ✕
                </button>
              </div>
            </div>
            
            <div className="image-zoom-content">
              <div className="image-wrapper">
                <img
                  src={photoUrl}
                  alt={`${user.uname}'s Profile`}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="zoomed-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/mnt/data/17.png";
                  }}
                />
              </div>
              
              <div className="image-info">
                <p><strong>Name:</strong> {user.uname}</p>
                {user.age && <p><strong>Age:</strong> {user.age} years</p>}
                {user.location && <p><strong>Location:</strong> {user.location}</p>}
                <p className="hint">Use buttons to zoom • Click and drag to pan • ESC to close</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}