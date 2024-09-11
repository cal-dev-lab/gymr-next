import * as ScrollArea from '@radix-ui/react-scroll-area';

export default () => (
    <ScrollArea.Root>
        <ScrollArea.Viewport />

        <ScrollArea.ScrollbarX>
            <ScrollArea.Track>
                <ScrollArea.ButtonStart />
                <ScrollArea.Thumb />
                <ScrollArea.ButtonEnd />
            </ScrollArea.Track>
        </ScrollArea.ScrollbarX>

        <ScrollArea.ScrollbarY>
            <ScrollArea.Track>
                <ScrollArea.ButtonStart />
                <ScrollArea.Thumb />
                <ScrollArea.ButtonEnd />
            </ScrollArea.Track>
        </ScrollArea.ScrollbarY>

        <ScrollArea.Corner />
    </ScrollArea.Root>
);