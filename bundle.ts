const files = [
    ['./src/scripts/cpx-user.ts','cpx-user'],
    ["./src/scripts/cpx-solution-card.ts",'cpx-solution-card']
];

await files.map(async f => {
    const [diagnostics, emit] = await Deno.bundle(f[0]);
    await Deno.writeTextFile(`./src/scripts/${f[1]}.js`, emit)
});

