import type { Command } from '../commands'
import { markProjectOnboardingComplete } from '../ProjectOnboarding'

const command = {
  type: 'prompt',
  name: 'init',
  description: 'Initialize a new CBORG-CODE.md file with codebase documentation',
  isEnabled: true,
  isHidden: false,
  progressMessage: 'analyzing your codebase',
  userFacingName() {
    return 'init'
  },
  async getPromptForCommand(_args: string) {
    // Mark onboarding as complete when init command is run
    markProjectOnboardingComplete()
    return [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Please analyze this codebase and create a CBORG-CODE.md file containing:
1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 20 lines long.
If there's already a CBORG-CODE.md, improve it.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.`,
          },
        ],
      },
    ]
  },
} satisfies Command

export default command
