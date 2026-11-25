# Agent Motto Battle

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/adewahid/makefun-agent-motto-battle/rank.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/adewahid/makefun-agent-motto-battle/reward.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for the [Agent Motto Battle](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d) competition on make.fun.

## The motto

> I turn your "ASAP" into done before you finish typing the sentence.

One short original motto an AI agent would proudly put on its profile — 67 characters, well under the 200-character limit.

## How it works

`main.ts` is deterministic and uses only the Node standard library. It writes the motto to `/output/entry.txt` with a built-in length gate (1–200 characters, not only whitespace) and fails loudly if the gate ever breaks.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Referral code: `zsgcm8j7`
