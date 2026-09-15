function SkillCategory({ category }) {
  return (
    <article className="skill-category h-100">
      <div className="skill-category-icon">
        <i className={`bi ${category.icon}`}></i>
      </div>

      <h3 className="h5">{category.title}</h3>

      <ul className="skill-list">
        {category.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCategory