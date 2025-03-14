# CBorg Code

This is a forked version of Anon Kode, forked from Claude Code. CBorg Code works with the CBorg AI Portal and is for internal use only at Berkeley Lab.

Terminal-based AI coding tool that can use any model that supports the OpenAI-style API.

- Fixes code
- Explains codes
- Runs tests, shell commands including git operations
- Whatever else claude-code can do, depending on the model you use
- It is experimental and might break

## How to Install

This is a pre-release development tool. Build Requirements: npm, pnpm, and bun.

Environment variables: Set CBORG_API_KEY, PNPM_HOME, and add PNPM_HOME to your path:

```
export CBORG_API_KEY="sk-..."
export PNPM_HOME=~/bin
export PATH=$PNPM_HOME:$PATH
```

Clone repo, build and link the binary:

```
curl -fsSL https://bun.sh/install | bash # install bun if you don't have it
pnpm install
pnpm run build
PNPM_HOME=~/bin pnpm link --global

cd your-project
cborg-code
```

## Staying Up-to-Date

This project is experimental. To stay up-to-date be sure to `git pull` from the repo frequently and rebuild with `pnpm run build`.

## 1st Time Setup

Type `/model` to select the module.

*NOTE:* The API key will be auto-populated from your environment - you don't need to set it.

*IMPORTANT*: Make sure to select a model that shows "tools" after the name, otherwise it will not work.

If budget is not a concern:

* Setup the "Large model Only" to anthropic/claude-sonnet
*  Setup the "Small model Only" to anthropic/claude-haiku

Lower Cost Alternative:

* Setup "Both" models to google/gemini-flash

Alternative (no cost and data retained in LBL network):

* Use lbl/qwen-coder for both models. (CURRENTLY NOT WORKING - PLEASE CHECK HERE FOR UPDATES)


## Development Use

To run the binary with extra logs:
```
NODE_ENV=development pnpm run dev --verbose --debug
```

## Status

- Cost calculations do not seem to work
- Occasional tool use errors occur

## Bug Reports

You can submit a bug from within the app with `/bug`, it will open a browser to github issue create with stuff filed out.

You can email [Science IT Consulting](scienceit@lbl.gov) with questions and to request help.

## Warning

Use at your own risk. Backup your code and use version control to prevent unintended consequences.

## Data and Privacy 

For more information go to the [Cborg Website](https://cborg.lbl.gov).


