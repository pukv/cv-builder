import Banner from "./Banner";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function PreviewWorkExp({
  workExp = [],
  isEditing,
  onToggleEdit,
  onDelete,
}) {
  const hasData = workExp.length > 0;

  return (
    <div className="cv-section">
      <Banner>Work Experience</Banner>
      {hasData ? (
        workExp.map((work, index) => (
          <div key={index} className="work-item">
            <h4 className="company-name">{work.companyName}</h4>
            <div className="preview-header">
              <span className="position">{work.positionTitle}</span>
              <div className="date-range">
                {work.jobStartDate} - {work.jobEndDate}
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
        <p>No work experience added yet</p>
      )}
    </div>
  );
}
