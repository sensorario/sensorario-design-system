import { useState } from "react";
import Button from "@design-system/Button";
import Input from "@design-system/Input";

export default function App() {
    const [activePanel, setActivePanel] = useState<"button" | "input">("button");

    const buttonSnippet = `import Button from "sensorario-design-system/Button";

<Button>Salva</Button>
<Button variant="secondary">Annulla</Button>`;

    const inputSnippet = `import Input from "sensorario-design-system/Input";

<label htmlFor="name">Nome</label>
<Input />`;

    return (
        <main className="demo-shell">
            <aside className="demo-sidebar" aria-label="Component menu">
                <strong>Menu</strong>
                <nav className="demo-sidebar-nav" aria-label="Component list">
                    <button
                        type="button"
                        className={`demo-menu-item ${activePanel === "button" ? "is-active" : ""}`}
                        onClick={() => setActivePanel("button")}
                    >
                        Button
                    </button>
                    <button
                        type="button"
                        className={`demo-menu-item ${activePanel === "input" ? "is-active" : ""}`}
                        onClick={() => setActivePanel("input")}
                    >
                        Input
                    </button>
                </nav>
            </aside>

            <div className="demo-layout">
                <header className="demo-header">
                    <h1>Sensorario Design System Demo</h1>
                </header>

                {activePanel === "button" ? (
                    <section className="demo-section">
                        <h2>Button</h2>
                        <p>
                            Usa il componente <strong>Button</strong> per azioni principali e
                            secondarie.
                        </p>

                        <article className="demo-card">
                            <h3>Varianti</h3>
                            <div className="demo-row">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                            </div>
                        </article>

                        <article className="demo-card">
                            <h3>Stati</h3>
                            <div className="demo-row">
                                <Button>Default</Button>
                                <Button disabled>Disabled</Button>
                                <Button variant="secondary" disabled>
                                    Secondary disabled
                                </Button>
                            </div>
                            <p className="demo-note">
                                Prova anche <kbd>Tab</kbd> per verificare lo stato focus.
                            </p>
                        </article>

                        <article className="demo-card">
                            <h3>Come includerlo</h3>
                            <pre className="demo-code">
                                <code>{buttonSnippet}</code>
                            </pre>
                        </article>
                    </section>
                ) : (
                    <section className="demo-section">
                        <h2>Input</h2>
                        <p>
                            Campo base per testo libero. Utile per verificare tipografia e
                            spaziature del design system.
                        </p>

                        <article className="demo-card">
                            <h3>Esempio base</h3>
                            <div className="demo-stack">
                                <label htmlFor="demo-input">Nome</label>
                                <Input />
                            </div>
                        </article>

                        <article className="demo-card">
                            <h3>Stato disabled (ereditato)</h3>
                            <fieldset disabled className="demo-stack">
                                <label htmlFor="demo-input-disabled">Nome (disabled)</label>
                                <Input />
                            </fieldset>
                        </article>

                        <article className="demo-card">
                            <h3>Come includerlo</h3>
                            <pre className="demo-code">
                                <code>{inputSnippet}</code>
                            </pre>
                        </article>
                    </section>
                )}
            </div>
        </main>
    );
}
