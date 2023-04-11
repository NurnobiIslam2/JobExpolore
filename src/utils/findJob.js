const findJobById = (id, jobExplore = []) => (jobExplore || []).find(el => el.id == id);

export { findJobById };