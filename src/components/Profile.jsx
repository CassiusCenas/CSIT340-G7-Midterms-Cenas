// import Statcard from "./Statcard";
import Bio from "./Bio";

function Profile() {
// function Profile({ value, label, rate }) {
  return (
    <div>
      <Bio name="Cassius Cenas" username="@CassiusCenas" />

      <div className="mt-6 flex gap-6">
        {/* <Statcard value={value} label={label} />
        <Statcard value={rate} label="PHP per hour" /> */}
      </div>
    </div>
  );
}

export default Profile;