import "./Equipment.css";
import transvaclogo from "../media/Transvac_Logo01.jpg";
import E3715 from "../media/Equip-3715.jpg";

function equipment() {
  return (
    <div>
      <div class="myContainer">
        {/* Left side ********************************************** */}
        <div class="equipment_left">
          <div>
            <img class="equipment_logo" src={transvaclogo} alt="Transvac" />
          </div>

          <div class="equipment_number">
            <h1>3715</h1>
          </div>

          <div class="equipment_list_title">
            <h1>Medium Volume Single Tank</h1>
          </div>

          <div class="equipment_list">
            {/* <h1>list</h1> */}
            <ul>
              <li>40 tons /hr. of fish</li>
              <li>8” to 10” (20.3cm or 25.4cm) dia. hose</li>
              <li>Electric, diesel or hydraulic power</li>
            </ul>
          </div>
        </div>
        {/* right side ********************************************** */}
        <div class="equipment_right">
          <div>
            <img
              class="equipment_picture"
              src={E3715}
              alt="Transvac"

            />
          </div>
        </div>
        {/* <div>
          <button class="favorite styled center" type="button">
            Back to Equipment
          </button>
        </div> */}

        
      </div> {/* My container */}
     

    </div>
  );
}
export default equipment;
