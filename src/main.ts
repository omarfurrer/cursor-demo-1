import { replaceQueryParam } from './helpers/replaceQueryParam';
import { executeQueries } from './helpers/executeQuery';

const resourceFilterRelationMap = {
  manager: `MATCH (people:People)-[:MANAGED_BY]->(manager:Account) WHERE manager.id = $managerId`,
  people: `MATCH (people:People { company_id: $companyId }) WHERE people.id = $peopleId`,
  peopleTag: `MATCH (people:People)-[:WITH_PEOPLE_TAG]->(peopleTag:PeopleTag) WHERE peopleTag.id = $peopleTagId`,
  peopleType: `MATCH (people:People)-[:WITH_PERSON_TYPE]->(peopleType:PeopleType) WHERE peopleType.id = $peopleTypeId`,
  department: `MATCH (people:People)-[:IN_DEPARTMENT]->(department:Department) WHERE department.id = $departmentId`,
  role: `MATCH (people:People)-[:WITH_ROLE]->(role:Role) WHERE role.id = $roleId`,
  timeOffType: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:TimeOff)-[:WITH_TIME_OFF_TYPE]->(timeOffType:TimeOffType) WHERE timeOffType.id = $timeOffTypeId`,
  timeOffStatus: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:TimeOff)-[:WITH_TIME_OFF_STATUS]->(timeOffStatus:TimeOffStatus) WHERE timeOffStatus.id = $timeOffStatusId`,
  client: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Phase)-[:ALLOCATED_TO_PROJECT]->(:Project)-[:ALLOCATED_TO_CLIENT]->(client:Client) WHERE client.id = $clientId`,
  project: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Phase)-[:ALLOCATED_TO_PROJECT]->(project:Project) WHERE project.id = $projectId`,
  phase: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(phase:Phase) WHERE phase.id = $phaseId`,
  projectTag: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Phase)-[:ALLOCATED_TO_PROJECT]->(:Project)-[:WITH_PROJECT_TAG]->(projectTag:ProjectTag) WHERE projectTag.id = $projectTagId`,
  projectOwner: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Phase)-[:ALLOCATED_TO_PROJECT]->(:Project)-[:OWNED_BY]->(projectOwner:Account) WHERE projectOwner.id = $projectOwnerId`,
  projectStatus: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Phase)-[:ALLOCATED_TO_PROJECT]->(:Project)-[:WITH_PROJECT_STATUS]->(projStatus:ProjectStatus) WHERE projStatus.id = $projectStatusId`,
  task: `MATCH (people:People)<-[:ALLOCATED_TO_PERSON]-(:Task)-[:WITH_TASK_META]->(task:TaskMeta) WHERE task.id = $taskId`,
  taskStatus: `MATCH (people:People { company_id: $companyId })<-[:ALLOCATED_TO_PERSON]-(task:Task)-[:WITH_TASK_META]->(:TaskMeta)-[:WITH_TASK_STATUS]->(taskStatus:TaskStatus) WHERE taskStatus.id = $taskStatusId`,
};

async function main() {
  // Example usage of resourceFilterRelationMap
  const resourceType = 'manager';
  const managerId = '12345';
  const companyId = 'COMP001';

  if (resourceType in resourceFilterRelationMap) {
    let query = resourceFilterRelationMap[resourceType];
    
    // Replace query parameters
    query = replaceQueryParam(query, 'managerId', managerId);
    query = replaceQueryParam(query, 'companyId', companyId);

    console.log('Prepared query:', query);

    // Execute the query
    try {
      await executeQueries([query]);
      console.log('Query execution completed successfully');
    } catch (error) {
      console.error('Error executing query:', error);
    }
  } else {
    console.error('Invalid resource type');
  }
}

main().catch(console.error);



