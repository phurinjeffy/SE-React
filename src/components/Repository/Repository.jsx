import React, { useState } from "react";
import "./repository.css";

import repoIcon from "../../assets/repo.svg";
import pinnedIcon from "../../assets/pinned.svg";

const Repository = () => {
  return (
    <div className="Reposit">
        <div className="Pinned">
            <div className="PinnedIcon">
                <img src={pinnedIcon} alt="pinnedIcon"/>
            </div>
            <div className="PinnedText">
                Pinned
            </div>
        </div>

        <div className="RepositRow">
            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>

            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>
        </div>

        <div className="RepositRow">
            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>

            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>
        </div>

        <div className="RepositRow">
            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>

            <div className="Project">
                <div className="ProjectRow">
                    <div className="ProjectIcon">
                        <img src={repoIcon} alt="repoIcon" />
                    </div>
                    <div className="ProjectName">
                        Endless Runner
                    </div>
                    <div className="ProjectVisibilityFrame">
                        <div className="ProjectVisibility">
                            public
                        </div>
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="Description">
                        An arcade survival game.
                    </div>
                </div>

                <div className="ProjectRow">
                    <div className="LanguageColor" />
                    <div className="Language">
                        languages
                    </div>
                    <div className="Time">
                        Updated 2 hours ago
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repository