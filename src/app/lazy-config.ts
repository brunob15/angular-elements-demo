export const lazyConfig = [
    {
        selector: 'talk',
        loadChildren: () => import('./components/talk/talk.module').then(m => m.TalkModule)
    },
    {
        selector: 'sponsor',
        loadChildren: () => import('./components/sponsor/sponsor.module').then(m => m.SponsorModule)
    }
];
