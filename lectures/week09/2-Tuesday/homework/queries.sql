-- SELECT project.name
-- FROM project
-- JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- JOIN tech ON project_uses_tech.tech_id = tech.id
-- WHERE tech.name = 'JavaScript';

-- SELECT tech.name 
-- FROM tech
-- INNER JOIN project_uses_tech  ON tech.id = project_uses_tech.tech_id
-- INNER JOIN project ON project_uses_tech.project_id = project.id
-- WHERE project.name = 'Personal Website';

-- SELECT tech.*
-- FROM tech 
-- LEFT OUTER JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
-- WHERE project_uses_tech.project_id IS NULL;

-- SELECT project.name , COUNT(project_uses_tech.tech_id)
-- FROM project
-- LEFT JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- GROUP BY project.id

-- SELECT project.name
-- FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- WHERE project_uses_tech.tech_id IS NULL;

-- SELECT tech.name , COUNT(project.id) 
-- FROM tech
-- LEFT JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
-- LEFT JOIN project ON project_uses_tech.project_id = project.id
-- GROUP BY tech.id

-- SELECT project.name, tech.name 
-- FROM project
-- JOIN project_uses_tech  ON project.id = project_uses_tech.project_id
-- JOIN tech ON project_uses_tech.tech_id = tech.id;


-- SELECT DISTINCT tech.name 
-- FROM tech
-- INNER JOIN project_uses_tech  ON tech.id = project_uses_tech.tech_id

-- SELECT DISTINCT name
-- FROM tech
-- WHERE id NOT IN (
--   SELECT tech_id
--   FROM project_uses_tech
-- )

-- SELECT DISTINCT project.name 
-- FROM project 
-- INNER JOIN project_uses_tech ON project.id = project_uses_tech.project_id;


-- SELECT project.name , COUNT(project_uses_tech.tech_id) 
-- FROM project
-- LEFT JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- GROUP BY project.id
-- ORDER BY COUNT(project_uses_tech.tech_id)  DESC;

-- SELECT tech.name , COUNT(project_uses_tech.project_id) 
-- FROM tech
-- LEFT JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
-- GROUP BY tech.id
-- ORDER BY COUNT(project_uses_tech.project_id)  DESC;


-- SELECT AVG(num_techs_used) 
-- FROM (
--   SELECT COUNT(project_uses_tech.tech_id) AS num_techs_used
--   FROM project 
--   LEFT JOIN project_uses_tech ON project.id = project_uses_tech.project_id
--   GROUP BY project.id
-- ) subquery