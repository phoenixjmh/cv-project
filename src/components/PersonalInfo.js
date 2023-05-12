const PersonalInfo=(props)=>(
      <div className="piForm form-section">
          <h3 className='section-label'>Personal Info</h3>

          <div className="row">
            <label htmlFor="name">
              <span className="form-label">Name</span>
              <input type="text" name="name" required ></input>
            </label>
          </div>

          <div className="row">
            <label htmlFor="email">
              <span className="form-label">Email</span>
              <input type="email" id="email" name="email" required ></input>
            </label>
          
            <label htmlFor="phone">
              <span className="form-label">Phone Number</span>
              <input type="tel" id="phone" name="phone" required ></input>
            </label>
          </div>
      </div>
    );
export default PersonalInfo;
