import { launchOnionRouters } from "./onionRouters/launchOnionRouters";
import { launchRegistry } from "./registry/registry";
import { launchUsers } from "./users/launchUsers";

export async function launchNetwork(nbNodes: number, nbUsers: number) {
  
  const registry = await launchRegistry();

  const onionServers = await launchOnionRouters(nbNodes);

  const userServers = await launchUsers(nbUsers);

  return [registry, ...onionServers, ...userServers];
}
