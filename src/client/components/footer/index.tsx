function Footer() {
    return (
        <footer className="absolute bottom-5 md:bottom-10 z-50">
            <div
                className="flex flex-row justify-center items-center gap-x-2 px-5 py-3 bg-card bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-border rounded-full"
            >
                <small className="text-xs lg:text-sm text-muted-foreground leading-none font-medium">
                    Developed by
                </small>
                <a href="https://github.com/Red0x-Research-Center" target="_blank" className="text-xs lg:text-sm leading-none font-medium">
                    RRC
                </a>
            </div>
        </footer>
    );
};

export default Footer;