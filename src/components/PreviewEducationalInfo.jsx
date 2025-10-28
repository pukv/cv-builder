import Banner from "./Banner";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function PreviewEducationalInfo({
  educationalInfo = [],
  isEditing,
  onToggleEdit,
  onDelete,
}) {
  const hasData = educationalInfo.length > 0;

  return (
    <div className="cv-section">
      <Banner>Education</Banner>
      {hasData ? (
        educationalInfo.map((edu, index) => (
          <div key={index} className="education-item">
            <h4 className="school-name">{edu.schoolName}</h4>
            <div className="preview-header">
              <span className="degree">{edu.educationLevel}</span>
              <div className="date-range">
                {edu.schoolStartDate} - {edu.schoolEndDate}
              </div>
            </div>
            <div className="preview-buttons">
              <EditButton
                isEditing={isEditing}
                onToggle={onToggleEdit}
                hasData={true}
                index={index}
              />
              <DeleteButton hasData={true} onDelete={onDelete} index={index} />
            </div>
          </div>
        ))
      ) : (
        <p>No education added yet</p>
      )}
    </div>
  );
}
