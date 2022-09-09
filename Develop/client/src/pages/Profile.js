import React from 'react';
//import ProfileList from '../components/ProfileList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//import { Link } from 'react-router-dom';



import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex-row justify-space-between my-4"></div>
      <h2 className="card-header">
        {profile.fullname}'s Details...
        </h2>
        <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                 Name: {profile.fullname} <br />
                  
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                   Email: {profile.email}<br /></span>
                   <span className="text-white" style={{ fontSize: '1rem' }}>
                   Agency Affiliation: {profile.agencyAffiliation}<br /></span>
                   <span className="text-white" style={{ fontSize: '1rem' }}>
                   Supervisor: {profile.supervisor}<br /></span>
                   <span className="text-white" style={{ fontSize: '1rem' }}>
                   BadgeNumber: {profile.badgeNumber}<br /></span>
                   <span className="text-white" style={{ fontSize: '1rem' }}>
                   PhoneNumber: {profile.phoneNumber}<br /></span>
                    </h4>
               </div>
            </div>  
           
          
        
     
            
          
         
      
  );   
  };  

        
      
  
      
        



export default Profile;
