export function getNextUrl(): string | null {
  if (
    process.env.GET_STARTED_TEAM_ID &&
    process.env.GET_STARTED_PROJECT_NAME &&
    process.env.GET_STARTED_ORIGIN
  ) {
    return `${process.env.GET_STARTED_ORIGIN}/new/starter-kit/step?teamId=${process.env.GET_STARTED_TEAM_ID}&projectName=${process.env.GET_STARTED_PROJECT_NAME}`;
  }
  return null;
}
