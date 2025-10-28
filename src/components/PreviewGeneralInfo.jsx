import Banner from "./Banner";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function PreviewGeneralInfo({
  generalInfo = {},
  isEditing,
  onToggleEdit,
  onDelete,
}) {
  const hasData =
    generalInfo.fullName || generalInfo.email || generalInfo.phone;

  return (
    <div className="cv-section">
      <Banner>Personal Information</Banner>
      {hasData ? (
        <>
          <h4 className="name">{generalInfo.fullName}</h4>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
          <div className="preview-buttons no-print">
            <EditButton
              isEditing={isEditing}
              onToggle={onToggleEdit}
              hasData={hasData}
            />
            <DeleteButton hasData={hasData} onDelete={onDelete} />
          </div>
        </>
      ) : (
        <p>No personal information added yet</p>
      )}
    </div>
  );
}
