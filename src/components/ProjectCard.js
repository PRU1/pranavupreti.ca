export const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="info-card project-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tag-row">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub &rarr;</a>
    </div>
  )
}
